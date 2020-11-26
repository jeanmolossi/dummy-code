import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import { RequestStatusEnum } from '../store/modules/app';
import { Comment, Post } from '../store/modules/posts';
import { createRandomId } from '../utils';
import { getPostById } from './postRepository';
import { RepositoryFunctionReturn } from './types';

export type GetPostsComment = RepositoryFunctionReturn<{
  comments: Post['comments'] | null;
}>;

export async function getPostComments(
  postId: string,
): Promise<GetPostsComment> {
  const { status, comments } = await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .get()
    .then(doc => ({
      status: RequestStatusEnum.RESOLVE,
      comments: doc.data()?.comments as Post['comments'],
    }))
    .catch(() => ({
      status: RequestStatusEnum.REJECT,
      comments: null,
    }));

  return {
    status,
    comments,
  };
}

export type SendPostComment = RepositoryFunctionReturn<{
  post: Post | null;
}>;

type CommentPayload = Pick<Comment, 'comment' | 'commentAuthorId'>;

export async function sendPostComment(
  postId: string,
  comment: CommentPayload,
): Promise<SendPostComment> {
  let { comments } = await getPostComments(postId);
  if (!comments) comments = [];

  const rid = createRandomId();

  const newComment: Comment = {
    ...comment,
    created_at: Date.now(),
    rid,
  };

  comments.push(newComment);

  const status = await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({ comments })
    .then(() => RequestStatusEnum.RESOLVE)
    .catch(() => RequestStatusEnum.REJECT);

  if (status === 'RESOLVE') {
    const { post, status: getStatus } = await getPostById(postId);

    return {
      post,
      status: getStatus,
    };
  }

  return {
    status,
    post: null,
  };
}

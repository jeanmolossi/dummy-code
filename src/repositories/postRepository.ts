import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import { ImageBase64 } from '../components';
import { RequestStatusEnum } from '../store/modules/app';
import { Post } from '../store/modules/posts';
import { User } from '../store/modules/user';
import { resolvePhotoURL } from '../utils';
import { RepositoryFunctionReturn } from './types';

type PublishNewPostPayload = {
  userId: string;
  images: ImageBase64[];
  post: string;
};

type PublishNewPostData = RepositoryFunctionReturn<{
  post: Post;
}>;

export async function publishNewPost(
  payload: PublishNewPostPayload,
): Promise<PublishNewPostData> {
  const { userId, post, images } = payload;
  const timestamp = Date.now();

  const PostEnvironment = await firebase
    .firestore()
    .collection('posts')
    .add({
      post,
      authorId: userId,
      comments: [],
      likes: 0,
      created_at: timestamp,
    })
    .then(async doc => {
      await doc.update({ postId: doc.id }).then(response => response);
      return {
        newPost: await doc.get().then(data => data.data() as Post),
        newPostDoc: doc,
        status: RequestStatusEnum.RESOLVE,
      };
    })
    .catch(() => ({
      newPost: null,
      newPostDoc: null,
      status: RequestStatusEnum.REJECT,
    }));

  let { status } = PostEnvironment;
  const { newPost, newPostDoc } = PostEnvironment;

  if (status === 'REJECT' || newPost === null || newPostDoc === null) {
    return {
      post: {} as Post,
      status,
    };
  }

  const { postId } = newPost;

  if (images.length > 0) {
    const imagesAsString = images.map(image => image as string);

    const storageRef = firebase.storage().ref();
    const imagesRef = imagesAsString.map((image: string, index) => {
      const ref = storageRef
        .child(`/${postId}/${index}`)
        .putString(image, 'data_url');
      return ref;
    });

    const uploadTasks = imagesRef.map(async ref => {
      const reference = await ref.then(snapshot =>
        snapshot.ref.getDownloadURL().then(res => res),
      );
      return reference;
    });

    const imagesAwaited = await Promise.all(uploadTasks).then(result => result);

    status = await newPostDoc
      .update({ images: imagesAwaited })
      .then(() => RequestStatusEnum.RESOLVE)
      .catch(() => RequestStatusEnum.REJECT);
  }

  const finalNewPost = await newPostDoc.get().then(data => data.data() as Post);

  return {
    status,
    post: finalNewPost,
  };
}

export type FeedPosts = {
  author: User;
  post: Post;
};

export async function getFeed(): Promise<FeedPosts[]> {
  const firebaseRef = firebase.firestore();

  const postsPromise = await firebaseRef
    .collection('posts')
    .orderBy('created_at', 'desc')
    .get()
    .then(collection => {
      return collection.docs.map(doc => doc.data());
    })
    .then(foundPosts =>
      foundPosts.map(async post => {
        const { postAuthor } = await firebaseRef
          .collection('users')
          .doc(post.authorId)
          .get()
          .then(userDoc => ({
            status: RequestStatusEnum.RESOLVE,
            postAuthor: userDoc.data() as User,
          }));

        const author = resolvePhotoURL(postAuthor);

        return {
          post,
          author,
        };
      }),
    );

  const posts = await Promise.all(postsPromise).then(result => result);

  return posts as FeedPosts[];
}

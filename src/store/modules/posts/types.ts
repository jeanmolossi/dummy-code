import { ActionReturnType } from '../rootTypes';
import { User } from '../user';

export type FeedPosts = {
  author: User;
  post: Post;
};

export type Comment = {
  rid: string;
  commentAuthorId: string;
  comment: string;
  created_at: number | Date;
};

export type Post = {
  images: string[];
  authorId: string;
  postId: string;
  post: string;
  comments: Comment[];
  likes: number;
  created_at: number;
};

export type GetFeedAction = ActionReturnType<'@posts/GET_FEED_ACTION', null>;

export type UpdateFeedPayload = FeedPosts[];

export type UpdateFeedAction = ActionReturnType<
  '@posts/UPDATE_FEED_ACTION',
  UpdateFeedPayload
>;

export type SendCommentPostPayload = {
  postId: string;
  comment: string;
  commentAuthorId: string;
};

export type SendCommentPostAction = ActionReturnType<
  '@posts/SEND_COMMENT_POST',
  SendCommentPostPayload
>;

export type ExcludePostPayload = {
  postId: string;
};

export type ExcludePostAction = ActionReturnType<
  '@posts/EXCLUDE_POST',
  ExcludePostPayload
>;

/**
 * @section MAIN STATE AND MAIN ACTIONS
 */

export type PostsActions = GetFeedAction | UpdateFeedAction | ExcludePostAction;

export type PostsState = {
  feed: FeedPosts[];
};

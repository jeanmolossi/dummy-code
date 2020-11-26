import {
  GetFeedAction,
  SendCommentPostAction,
  SendCommentPostPayload,
  UpdateFeedAction,
  UpdateFeedPayload,
} from './types';

export function UpdateFeed(payload: UpdateFeedPayload): UpdateFeedAction {
  return {
    type: '@posts/UPDATE_FEED_ACTION',
    payload,
  };
}

export function GetFeed(): GetFeedAction {
  return {
    type: '@posts/GET_FEED_ACTION',
    payload: null,
  };
}

export function SendCommentPost(
  payload: SendCommentPostPayload,
): SendCommentPostAction {
  return {
    type: '@posts/SEND_COMMENT_POST',
    payload,
  };
}

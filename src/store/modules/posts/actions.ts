import { GetFeedAction, UpdateFeedAction, UpdateFeedPayload } from './types';

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

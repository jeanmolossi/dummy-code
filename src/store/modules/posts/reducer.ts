import produce from 'immer';
import { PostsActions, PostsState } from './types';

const INITIAL_STATE: PostsState = {
  feed: [],
};

export function postsReducer(
  state: PostsState = INITIAL_STATE,
  action: PostsActions,
) {
  return produce(state, draft => {
    switch (action.type) {
      case '@posts/UPDATE_FEED_ACTION': {
        const { payload } = action;

        draft.feed = payload;

        break;
      }
      default:
    }
  });
}

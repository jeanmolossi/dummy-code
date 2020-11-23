import { all, debounce, put } from 'redux-saga/effects';
import { getFeed } from '../../../repositories/postRepository';
import { UpdateFeed } from './actions';
import { GetFeedAction } from './types';

function* GetFeedSaga() {
  const { posts } = yield getFeed();

  yield put(UpdateFeed(posts));
}

export const postsSaga = all([
  debounce<GetFeedAction['type'], typeof GetFeedSaga>(
    1000,
    '@posts/GET_FEED_ACTION',
    GetFeedSaga,
  ),
]);

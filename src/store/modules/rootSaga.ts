import { all } from 'redux-saga/effects';
import { postsSaga as posts } from './posts';
import { userSaga as user } from './user';

export default function* rootSaga() {
  return yield all([user, posts]);
}

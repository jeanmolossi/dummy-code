import { all } from 'redux-saga/effects';
import { userSaga as user } from './user';

export default function* rootSaga() {
  return yield all([user]);
}

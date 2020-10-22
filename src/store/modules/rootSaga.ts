import { all } from 'redux-saga/effects';
import { exampleSaga as example } from './example';

export default function* rootSaga() {
  return yield all([example]);
}

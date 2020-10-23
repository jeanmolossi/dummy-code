import { all, put, call, takeLatest } from 'redux-saga/effects';
import { exampleSuccess } from './actions';
import { RequestAction, SuccessActionPayload } from './types';

function* ExampleRequest(action: RequestAction) {
  const { payload } = action;

  // eslint-disable-next-line no-console
  yield call(console.log, 'ok');

  const newExamplePayload: SuccessActionPayload = {
    example: {
      any: payload,
    },
  };

  yield put(exampleSuccess(newExamplePayload));
}

export default all([
  takeLatest<RequestAction>('@example/EXAMPLE_REQUEST', ExampleRequest),
]);

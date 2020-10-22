import {
  RequestAction,
  RequestActionPayload,
  SuccessAction,
  SuccessActionPayload,
} from './types';

export function exampleRequest(payload: RequestActionPayload): RequestAction {
  return {
    type: '@example/EXAMPLE_REQUEST',
    payload,
  };
}

export function exampleSuccess(payload: SuccessActionPayload): SuccessAction {
  return {
    type: '@example/EXAMPLE_SUCCESS',
    payload,
  };
}

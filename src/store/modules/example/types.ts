import { ActionReturnType } from '../rootTypes';

export interface ExampleState {
  loading: boolean;
  sampleData: any[];
}

export type RequestActionPayload = {
  example: string;
};

export type SuccessActionPayload = {
  example: {
    any: any;
  };
};

export type RequestAction = ActionReturnType<
  '@example/EXAMPLE_REQUEST',
  RequestActionPayload
>;

export type SuccessAction = ActionReturnType<
  '@example/EXAMPLE_SUCCESS',
  SuccessActionPayload
>;

export type ExampleActions = RequestAction | SuccessAction;

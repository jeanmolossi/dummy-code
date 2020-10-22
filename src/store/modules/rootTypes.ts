import { ExampleState } from './example';

export type ActionReturnType<A = string, T = any> = {
  type: A;
  payload: T;
};

export interface RootState {
  example: ExampleState;
}

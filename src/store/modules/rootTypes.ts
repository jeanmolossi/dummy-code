import { ExampleState } from './example/types';

export type ActionReturnType<A = string, T = any> = {
  type: A;
  payload: T;
};

export interface RootState {
  example: ExampleState;
}

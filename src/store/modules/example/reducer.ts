import { produce } from 'immer';
import { ExampleActions, ExampleState } from './types';

const INITIAL_STATE: ExampleState = {
  loading: false,
  sampleData: [],
};

export default function example(
  state: ExampleState = INITIAL_STATE,
  action: ExampleActions,
): ExampleState {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return produce(state, draft => {
    switch (action.type) {
      case '@example/EXAMPLE_REQUEST': {
        // REDUCER CODE
        break;
      }
      case '@example/EXAMPLE_SUCCESS': {
        // REDUCER CODE
        break;
      }
      default:
    }
  });
}

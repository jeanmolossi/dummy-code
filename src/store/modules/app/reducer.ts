import { produce } from 'immer';
import { AppActions, AppState } from './types';

const INITIAL_STATE: AppState = {
  requestStatus: null,
};

export default function appReducer(
  state: AppState = INITIAL_STATE,
  action: AppActions,
): AppState {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return produce(state, draft => {
    switch (action.type) {
      case '@app/UPDATE_REQUEST_STATUS': {
        const { payload } = action;

        draft.requestStatus = payload;

        break;
      }
      default:
    }
  });
}

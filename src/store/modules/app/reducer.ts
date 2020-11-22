import { produce } from 'immer';
import { AppActions, AppState } from './types';

const INITIAL_STATE: AppState = {
  requestStatus: null,
  requestMessage: null,
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

        const { status, message } = payload;

        draft.requestStatus = status;
        draft.requestMessage = message;

        break;
      }
      default:
    }
  });
}

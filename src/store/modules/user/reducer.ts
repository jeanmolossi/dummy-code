import { produce } from 'immer';
import { UserActions, UserState } from './types';

const INITIAL_STATE: UserState = {
  authUser: {},
};

export default function userReducer(
  state: UserState = INITIAL_STATE,
  action: UserActions,
): UserState {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD': {
        const { payload } = action;
        console.log(payload);
        //
        break;
      }
      default:
    }
  });
}

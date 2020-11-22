import { produce } from 'immer';
import { User, UserActions, UserState } from './types';

const INITIAL_STATE: UserState = {
  authUser: {} as User,
};

export default function userReducer(
  state: UserState = INITIAL_STATE,
  action: UserActions,
): UserState {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/UPDATE_AUTH_USER': {
        const { payload } = action;

        const { user } = payload;

        draft.authUser = user;

        break;
      }
      case '@user/KILL_USER_SESSION': {
        draft.authUser = {} as User;

        break;
      }
      default:
    }
  });
}

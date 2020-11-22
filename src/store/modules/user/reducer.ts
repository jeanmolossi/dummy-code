import { produce } from 'immer';
import { resolvePhotoURL } from '../../../utils';
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

        const authUser = resolvePhotoURL(user);

        draft.authUser = authUser;

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

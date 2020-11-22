import {
  CreateAccountWithEmailAndPasswordAction,
  CreateAccountWithEmailAndPasswordPayload,
  KillUserSessionAction,
  StartUserSessionAction,
  StartUserSessionPayload,
  UpdateAuthUserAction,
  UpdateAuthUserPayload,
} from './types';

export function CreateAccountWithEmailAndPassword({
  email,
  password,
  name,
}: CreateAccountWithEmailAndPasswordPayload): CreateAccountWithEmailAndPasswordAction {
  return {
    type: '@user/CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD',
    payload: {
      name,
      email,
      password,
    },
  };
}

export function StartUserSession({
  uid,
}: StartUserSessionPayload): StartUserSessionAction {
  return {
    type: '@user/START_USER_SESSION',
    payload: {
      uid,
    },
  };
}

export function KillUserSession(): KillUserSessionAction {
  return {
    type: '@user/KILL_USER_SESSION',
    payload: null,
  };
}

export function UpdateAuthUser({
  user,
}: UpdateAuthUserPayload): UpdateAuthUserAction {
  return {
    type: '@user/UPDATE_AUTH_USER',
    payload: {
      user,
    },
  };
}

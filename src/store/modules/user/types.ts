import { ActionReturnType } from '../rootTypes';

export type User = {
  uid: string;
  displayName?: string;
  photoURL?: string;
  email: string;
};

export type CreateAccountWithEmailAndPasswordPayload = {
  email: string;
  password: string;
};

export type CreateAccountWithEmailAndPasswordAction = ActionReturnType<
  '@user/CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD',
  CreateAccountWithEmailAndPasswordPayload
>;

export type StartUserSessionPayload = {
  uid: string;
};

export type StartUserSessionAction = ActionReturnType<
  '@user/START_USER_SESSION',
  StartUserSessionPayload
>;

export type KillUserSessionAction = ActionReturnType<
  '@user/KILL_USER_SESSION',
  null
>;

export type UpdateAuthUserPayload = {
  user: User;
};

export type UpdateAuthUserAction = ActionReturnType<
  '@user/UPDATE_AUTH_USER',
  UpdateAuthUserPayload
>;

export type UserActions =
  | CreateAccountWithEmailAndPasswordAction
  | UpdateAuthUserAction
  | KillUserSessionAction;

export type UserState = {
  authUser: User;
};

import { ActionReturnType } from '../rootTypes';

export type CreateAccountWithEmailAndPasswordPayload = {
  email: string;
  password: string;
};

export type CreateAccountWithEmailAndPasswordAction = ActionReturnType<
  '@user/CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD',
  CreateAccountWithEmailAndPasswordPayload
>;

export type UserActions = CreateAccountWithEmailAndPasswordAction;

export type UserState = {
  //
};

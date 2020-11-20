import {
  CreateAccountWithEmailAndPasswordAction,
  CreateAccountWithEmailAndPasswordPayload,
} from './types';

export function CreateAccountWithEmailAndPassword({
  email,
  password,
}: CreateAccountWithEmailAndPasswordPayload): CreateAccountWithEmailAndPasswordAction {
  return {
    type: '@user/CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD',
    payload: {
      email,
      password,
    },
  };
}

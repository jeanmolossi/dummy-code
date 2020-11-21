import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { all, put, takeLatest } from 'redux-saga/effects';
import { RequestStatusEnum, UpdateRequestStatus } from '../app/actions';
import { CreateAccountWithEmailAndPasswordAction } from './types';

type User = {
  email: string;
  emailVerified: boolean;
  uid: string;
};

function* CreateAccountWithEmailAndPassword({
  payload,
}: CreateAccountWithEmailAndPasswordAction) {
  const { email, password } = payload;

  yield put(UpdateRequestStatus(RequestStatusEnum.PENDING, 'Criando conta...'));

  const status: 'RESOLVE' | 'REJECT' = yield firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      const { user } = response;

      if (!user) return RequestStatusEnum.REJECT;

      const { uid } = user;

      const usersCollection = firebase.firestore().collection(`users`);

      return usersCollection
        .doc(uid)
        .set({
          uid,
          email,
        })
        .then(() => RequestStatusEnum.RESOLVE)
        .catch(() => RequestStatusEnum.REJECT);
    })
    .catch(() => RequestStatusEnum.REJECT);

  const message =
    status === 'REJECT'
      ? 'Não foi possível criar sua conta, ocorreu algum erro =('
      : 'Conta criada! Enviamos um e-mail, verifique e confirme sua conta.';

  yield put(UpdateRequestStatus(status, message));
}

export default all([
  takeLatest<
    CreateAccountWithEmailAndPasswordAction['type'],
    typeof CreateAccountWithEmailAndPassword
  >(
    '@user/CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD',
    CreateAccountWithEmailAndPassword,
  ),
]);

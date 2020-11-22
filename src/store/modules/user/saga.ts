import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { all, put, select, takeLatest } from 'redux-saga/effects';
import { getUserByUid } from '../../../repositories';
import { RequestStatusEnum, UpdateRequestStatus } from '../app/actions';
import { RootState } from '../rootTypes';
import { UpdateAuthUser } from './actions';
import {
  CreateAccountWithEmailAndPasswordAction,
  StartUserSessionAction,
} from './types';

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

function* StartUserSessionSaga({ payload }: StartUserSessionAction) {
  const { uid } = payload;

  const { authUser } = yield select((state: RootState) => ({
    authUser: state.user.authUser,
  }));

  if (!authUser.uid) {
    put(UpdateRequestStatus('PENDING', 'Carregando dados de usuário...'));
  }

  const { status, message, user } = yield getUserByUid(uid);

  if (!authUser.uid) {
    if (user) {
      yield put(UpdateAuthUser({ user }));
    }

    yield put(UpdateRequestStatus(status, message));
  }
}

export default all([
  takeLatest<
    CreateAccountWithEmailAndPasswordAction['type'],
    typeof CreateAccountWithEmailAndPassword
  >(
    '@user/CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD',
    CreateAccountWithEmailAndPassword,
  ),

  takeLatest<StartUserSessionAction['type'], typeof StartUserSessionSaga>(
    '@user/START_USER_SESSION',
    StartUserSessionSaga,
  ),
]);

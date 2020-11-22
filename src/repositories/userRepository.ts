import firebase from 'firebase/app';
import 'firebase/firestore';
import { RequestStatusEnum } from '../store/modules/app/actions';
import { User } from '../store/modules/user';
import { RepositoryFunctionReturn } from './types';

export type GetUserByUidResponse = RepositoryFunctionReturn<{
  user: User | null;
  message: string;
}>;

export async function getUserByUid(uid: string): Promise<GetUserByUidResponse> {
  const { user, status, message } = await firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then(doc => ({
      status: RequestStatusEnum.RESOLVE,
      message: 'Encontramos suas informações... seu acesso foi liberado!',
      user: doc.data() as User,
    }))
    .catch(() => ({
      status: RequestStatusEnum.REJECT,
      message: 'Ocorreu um erro, não encontramos suas informações. Desculpe',
      user: null,
    }));

  return {
    status,
    user,
    message,
  };
}

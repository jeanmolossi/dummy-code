import firebase from 'firebase/app';
import 'firebase/auth';
import { RequestStatusEnum } from '../store/modules/app/actions';
import { FirebaseUser as User } from '../store/modules/user';
import { RepositoryFunctionReturn } from './types';

type signInWithEmailAndPasswordReturn = RepositoryFunctionReturn<{
  status: 'RESOLVE' | 'REJECT';
  user: User | null;
}>;

export async function signInWithEmailAndPassword(
  email: string,
  password: string,
): Promise<signInWithEmailAndPasswordReturn> {
  const { status, user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      const { user: ensureAuthUser } = userAuth;
      return {
        status: RequestStatusEnum.RESOLVE,
        user: ensureAuthUser as User,
      };
    })
    .catch(() => ({ status: RequestStatusEnum.REJECT, user: null }));

  return { status, user };
}

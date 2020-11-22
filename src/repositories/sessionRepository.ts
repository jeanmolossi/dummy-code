import firebase from 'firebase/app';
import 'firebase/auth';
import { RequestStatusEnum } from '../store/modules/app/actions';

export async function signInWithEmailAndPassword(
  email: string,
  password: string,
): Promise<void> {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      const { user: ensureAuthUser } = userAuth;
      return {
        status: RequestStatusEnum.RESOLVE,
        user: ensureAuthUser,
      };
    })
    .catch(() => ({ status: RequestStatusEnum.REJECT, user: null }));
}

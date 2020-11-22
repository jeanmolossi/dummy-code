import React, {
  ReactNode,
  useCallback,
  useEffect,
  createContext,
  useContext,
} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../repositories';
import { UpdateRequestStatus } from '../store/modules/app';
import { KillUserSession, StartUserSession } from '../store/modules/user';

interface AuthContextProps {
  children?: ReactNode;
}

interface AuthContextProviderValue {
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
}

const Auth = createContext<AuthContextProviderValue>(
  {} as AuthContextProviderValue,
);

const AuthContext = ({ children }: AuthContextProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const signIn = useCallback(
    async data => {
      const { email, password } = data;

      dispatch(
        UpdateRequestStatus('PENDING', 'Acessando sua conta, só um minutinho'),
      );

      const { status } = await signInWithEmailAndPassword(email, password);

      if (status === 'REJECT') {
        dispatch(
          UpdateRequestStatus(
            status,
            'Não foi possível acessar sua conta. Verifique suas credenciais ou recupere sua senha',
          ),
        );
      }
    },
    [dispatch],
  );

  const signOut = useCallback(async () => {
    await firebase.auth().signOut();
    dispatch(KillUserSession());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      console.log('onAuthStateChanged // Auth.tsx', firebaseUser);

      if (firebaseUser && firebaseUser.emailVerified) {
        const { uid } = firebaseUser;
        dispatch(StartUserSession({ uid }));
      } else if (firebaseUser && !firebaseUser.emailVerified) {
        history.replace('/confirm-account', {});
      }
    });

    return () => unsubscribe();
  }, [history, dispatch]);

  return <Auth.Provider value={{ signIn, signOut }}>{children}</Auth.Provider>;
};

function useAuth() {
  const context = useContext(Auth);
  return context;
}

export { AuthContext, useAuth };

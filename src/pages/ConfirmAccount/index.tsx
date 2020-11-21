import React, { useCallback, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button, MainLayout } from '../../components';
import { UpdateRequestStatus } from '../../store/modules/app/actions';
import { Container } from './styles';

const ConfirmAccount: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const verify = useCallback(() => {
    const { currentUser } = firebase.auth();
    if (!currentUser) return;

    setTimeout(() => {
      currentUser.reload();
      if (currentUser.emailVerified) {
        dispatch(
          UpdateRequestStatus(
            'RESOLVE',
            'Conta confirmada e acesso liberado! Aproveite',
          ),
        );
        history.replace('/home');
        return;
      }
      verify();
    }, 1000);
  }, [history, dispatch]);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    if (currentUser && !currentUser.emailVerified) {
      currentUser.sendEmailVerification();
      dispatch(
        UpdateRequestStatus(
          'PENDING',
          'Estamos aguardando você clicar no link de confirmação que enviamos por e-mail',
        ),
      );
    }
    const timeout = setTimeout(() => {
      dispatch(
        UpdateRequestStatus(
          'REJECT',
          'Você não confirmou o e-mail. Verifique seu spam e lixo eletrônico',
        ),
      );
    }, 1000 * 60 * 1);

    verify();

    return () => clearTimeout(timeout);
  }, [dispatch, verify]);

  return (
    <MainLayout showBottomTabs={false}>
      <Container style={{ padding: 48 }}>
        <h1>Confirme sua conta</h1>

        <hr />

        <h2>Não identificamos a confirmação da sua conta.</h2>

        <p>
          Acesse seu e-mail e confirme no link enviado para você. Em seguida,
          clique no botão abaixo e tente acessar novamente.
        </p>

        <hr />

        <Button as={Link} to="/" onClick={signOut} variant="red">
          Voltar e tentar novamente...
        </Button>
      </Container>
    </MainLayout>
  );
};

export default ConfirmAccount;

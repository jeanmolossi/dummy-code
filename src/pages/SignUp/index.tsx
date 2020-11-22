import React, { useCallback, useEffect } from 'react';
import { Form } from '@unform/web';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  FiArrowLeft,
  FiArrowRight,
  FiLock,
  FiMail,
  FiUser,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { MainLayout, Input, Button } from '../../components';
import { RootState } from '../../store/modules/rootTypes';
import { CreateAccountWithEmailAndPassword } from '../../store/modules/user/actions';
import { Container, Logo, ButtonsContainer } from './styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { requestStatus } = useSelector((state: RootState) => ({
    requestStatus: state.app.requestStatus,
  }));

  const handleSubmit = useCallback(
    data => {
      dispatch(CreateAccountWithEmailAndPassword(data));
    },
    [dispatch],
  );

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        history.push('/home');
      } else if (user && !user.emailVerified) {
        if (requestStatus === null) history.push('/confirm-account');
      }
    });

    return () => {
      subscribe();
    };
  }, [history, requestStatus]);

  return (
    <MainLayout showBottomTabs={false}>
      <Container>
        <Logo />

        <h1>Olá!</h1>
        <h2>Vamos começar</h2>

        <Form onSubmit={handleSubmit}>
          <Input
            icon={FiUser}
            name="name"
            placeholder="Digite seu nome/apelido"
          />

          <Input icon={FiMail} name="email" placeholder="Seu melhor e-mail" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Uma senha ultra-secreta sua"
          />

          <ButtonsContainer>
            <Button as={Link} to="/" variant="red" $translucent>
              <FiArrowLeft />
            </Button>

            <Button variant="red" type="submit">
              Cadastrar
              <FiArrowRight />
            </Button>
          </ButtonsContainer>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default SignUp;

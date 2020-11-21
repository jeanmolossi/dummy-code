import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FiArrowRight, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { MainLayout, Input, Button } from '../../components';
import {
  RequestStatusEnum,
  UpdateRequestStatus,
} from '../../store/modules/app/actions';
import { Container, Logo, ButtonsContainer } from './styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    async data => {
      const { email, password } = data;

      dispatch(
        UpdateRequestStatus('PENDING', 'Acessando sua conta, só um minutinho'),
      );

      const { status, user } = await firebase
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

      const message =
        status === 'REJECT'
          ? 'Não foi possível fazer o login, desculpe'
          : 'Acesso liberado! Faça bom proveito =)';

      dispatch(UpdateRequestStatus(status, message));

      if (user) {
        return user.emailVerified
          ? history.push('/home')
          : history.push('/confirm-account');
      }
      return null;
    },
    [dispatch, history],
  );

  return (
    <MainLayout showBottomTabs={false}>
      <Container>
        <Logo />

        <h1>Wellcome!</h1>
        <h2>Acesse para continuar</h2>

        <Form onSubmit={handleSubmit}>
          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Sua senha ultra-secreta"
          />

          <ButtonsContainer>
            <Button type="submit" variant="red">
              Acessar
              <FiArrowRight />
            </Button>

            <Button as={Link} to="/forgot-password" variant="transparent">
              Esqueceu sua senha?
            </Button>

            <Button as={Link} to="/signup" variant="yellow" $translucent>
              Criar conta
            </Button>
          </ButtonsContainer>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default SignIn;

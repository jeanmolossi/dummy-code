import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import firebase from 'firebase/app';
import { FiArrowLeft, FiArrowRight, FiMail } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { MainLayout, Input, Button } from '../../components';
import {
  RequestStatusEnum,
  UpdateRequestStatus,
} from '../../store/modules/app';
import { Container, Logo, ButtonsContainer } from './styles';
import 'firebase/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    async data => {
      dispatch(
        UpdateRequestStatus(
          'PENDING',
          'Enviando e-mail de recuperação de senha',
        ),
      );

      const { email } = data;
      const status = await firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => RequestStatusEnum.RESOLVE)
        .catch(() => RequestStatusEnum.REJECT);

      const message =
        status === 'REJECT'
          ? 'Não encontramos este e-mail, tente cadastrar-se outra vez caso já tenha feito =('
          : 'E-mail de recuperação enviado! Confira a caixa de spam também!';

      dispatch(UpdateRequestStatus(status, message));

      history.push('/');
    },
    [dispatch, history],
  );

  return (
    <MainLayout showBottomTabs={false}>
      <Container>
        <Logo />

        <h1>Ops,</h1>
        <h2>
          Esqueceu sua senha?
          <br />
          Vamos resolver isso!
        </h2>

        <Form onSubmit={handleSubmit}>
          <Input
            icon={FiMail}
            name="email"
            placeholder="Seu e-mail de cadastro"
          />

          <ButtonsContainer>
            <Button as={Link} to="/" variant="red" $translucent>
              <FiArrowLeft />
            </Button>

            <Button variant="red" type="submit">
              Recuperar
              <FiArrowRight />
            </Button>
          </ButtonsContainer>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default SignUp;

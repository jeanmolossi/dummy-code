import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiArrowRight, FiLock, FiMail } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MainLayout, Input, Button } from '../../components';
import { CreateAccountWithEmailAndPassword } from '../../store/modules/user/actions';
import { Container, Logo, ButtonsContainer } from './styles';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    data => {
      dispatch(CreateAccountWithEmailAndPassword(data));
    },
    [dispatch],
  );

  return (
    <MainLayout showBottomTabs={false}>
      <Container>
        <Logo />

        <h1>Olá!</h1>
        <h2>Vamos começar</h2>

        <Form onSubmit={handleSubmit}>
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

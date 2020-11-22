import React from 'react';
import { Form } from '@unform/web';
import { FiArrowRight, FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout, Input, Button } from '../../components';
import { useAuth } from '../../contexts/Auth';
import { Container, Logo, ButtonsContainer } from './styles';

const SignIn = () => {
  const { signIn } = useAuth();

  return (
    <MainLayout showBottomTabs={false}>
      <Container>
        <Logo />

        <h1>Wellcome!</h1>
        <h2>Acesse para continuar</h2>

        <Form onSubmit={signIn}>
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

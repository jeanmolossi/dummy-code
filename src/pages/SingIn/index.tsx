import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiLock, FiUser } from 'react-icons/fi';
import { MainLayout, Input } from '../../components';
import { Container, Logo, ButtonsContainer } from './styles';

const SignIn = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Logo />

        <h1>Wellcome!</h1>
        <h2>Acesse para continuar</h2>

        <Form onSubmit={handleSubmit}>
          <Input icon={FiUser} name="username" placeholder="username" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="password"
          />
        </Form>

        <ButtonsContainer>
          <button type="button">Acessar</button>
          <button type="button">Esqueceu sua senha?</button>
          <button type="button">Criar conta</button>
        </ButtonsContainer>
      </Container>
    </MainLayout>
  );
};

export default SignIn;

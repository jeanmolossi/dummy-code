import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiArrowRight, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout, Input, Button } from '../../components';
import { Container, Logo, ButtonsContainer } from './styles';

const SignIn = () => {
  const handleSubmit = useCallback(data => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <MainLayout>
      <Container>
        <Logo />

        <h1>Wellcome!</h1>
        <h2>Acesse para continuar</h2>

        <Form onSubmit={handleSubmit}>
          <Input icon={FiUser} name="username" placeholder="Nick name" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Sue senha ultra-secreta"
          />

          <ButtonsContainer>
            <Button type="submit" variant="red">
              Acessar
              <FiArrowRight />
            </Button>

            <Button as={Link} to="/forgot-password" variant="transparent">
              Esqueceu sua senha?
            </Button>

            <Button as={Link} to="/signup" variant="yellow" translucent>
              Criar conta
            </Button>
          </ButtonsContainer>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default SignIn;

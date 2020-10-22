import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiArrowRight, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout, Input, Button } from '../../components';
import { Container, Logo, ButtonsContainer } from './styles';

const SignUp = () => {
  const handleSubmit = useCallback(data => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <MainLayout>
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
            <Button as={Link} to="/" variant="red" translucent>
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

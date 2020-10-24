import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import {
  FiArrowLeft,
  FiArrowRight,
  FiLock,
  FiMail,
  FiUser,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout, Input, Button, UnsuccessModal } from '../../components';
import { useModal } from '../../utils';
import { Container, Logo, ButtonsContainer } from './styles';

const SignUp = () => {
  const { isOpen, onClose, onOpen } = useModal();

  const handleSubmit = useCallback(
    data => {
      // eslint-disable-next-line no-console
      console.log(data);

      onOpen();
    },
    [onOpen],
  );

  return (
    <MainLayout showBottomTabs={false}>
      <Container>
        <Logo />

        <h1>Olá!</h1>
        <h2>Vamos começar</h2>

        <Form onSubmit={handleSubmit}>
          <Input icon={FiUser} name="username" placeholder="Nick name" />

          <Input icon={FiMail} name="email" placeholder="Seu melhor e-mail" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Uma senha ultra-secreta sua"
          />

          <ButtonsContainer>
            <Button as={Link} to="/" variant="red" translucent>
              <FiArrowLeft />
            </Button>

            <Button variant="red" type="submit">
              Cadastrar
              <FiArrowRight />
            </Button>
          </ButtonsContainer>
        </Form>
      </Container>

      <UnsuccessModal
        isOpen={isOpen}
        onClose={onClose}
        title="Ocorreu um erro"
        Description={
          <>
            Houve algum erro interno. Não conseguimos cadastrar sua conta.
            <br />
            Tente novamente mais tarde.
          </>
        }
        goRoute="/"
        textButton="Voltar para o início"
      />
    </MainLayout>
  );
};

export default SignUp;

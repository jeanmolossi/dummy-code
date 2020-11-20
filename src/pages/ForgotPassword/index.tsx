import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiArrowRight, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout, Input, Button, SuccessModal } from '../../components';
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

      <SuccessModal
        {...{ isOpen, onClose }}
        title="Recuperação enviada!"
        Description={
          <>
            Verifique seu e-mail que enviamos para você as instruções.
            <br />
            <br />
            Após completar os passos você já pode fazer o login
          </>
        }
        goRoute="/"
        textButton="Voltar para login"
      />
    </MainLayout>
  );
};

export default SignUp;

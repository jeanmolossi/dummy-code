import React, { useCallback, useEffect } from 'react';
import { Form } from '@unform/web';
import {
  FiArrowLeft,
  FiArrowRight,
  FiLock,
  FiMail,
  FiUser,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MainLayout,
  Input,
  Button,
  UnsuccessModal,
  SuccessModal,
} from '../../components';
import { RequestStatusEnum } from '../../store/modules/app/actions';
import { RootState } from '../../store/modules/rootTypes';
import { CreateAccountWithEmailAndPassword } from '../../store/modules/user/actions';
import { useModal } from '../../utils';
import { Container, Logo, ButtonsContainer } from './styles';

const SignUp = () => {
  const {
    isOpen: isOpenResolve,
    onClose: onCloseResolve,
    onOpen: onOpenResolve,
  } = useModal();
  const {
    isOpen: isOpenReject,
    onClose: onCloseReject,
    onOpen: onOpenReject,
  } = useModal();
  const {
    isOpen: isOpenPending,
    onClose: onClosePending,
    onOpen: onOpenPending,
  } = useModal();

  const dispatch = useDispatch();
  const { app } = useSelector((state: RootState) => ({ app: state.app }));

  const handleSubmit = useCallback(
    data => {
      // eslint-disable-next-line no-console
      dispatch(CreateAccountWithEmailAndPassword(data));
    },
    [dispatch],
  );

  useEffect(() => {
    if (app.requestStatus === RequestStatusEnum.PENDING) {
      onOpenPending();
    }
    if (app.requestStatus === RequestStatusEnum.RESOLVE) {
      onClosePending();
      onOpenResolve();
    }
    if (app.requestStatus === RequestStatusEnum.REJECT) {
      onClosePending();
      onOpenReject();
    }

    return () => {
      onClosePending();
      onCloseReject();
      onCloseResolve();
    };
  }, [
    onOpenReject,
    onCloseReject,
    onOpenPending,
    onClosePending,
    onOpenResolve,
    onCloseResolve,
    app,
  ]);

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

      <SuccessModal
        isOpen={isOpenPending}
        onClose={onClosePending}
        title="Cadastrando..."
        Description={<>Aguarde enquanto registramos sua conta...</>}
        goRoute="/signup"
        textButton="Aguarde..."
      />

      <SuccessModal
        isOpen={isOpenResolve}
        onClose={onCloseResolve}
        title="Cadastrado"
        Description={<>Sua conta foi registrada com sucesso!</>}
        goRoute="/"
        textButton="Voltar para o login"
      />

      <UnsuccessModal
        isOpen={isOpenReject}
        onClose={onCloseReject}
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

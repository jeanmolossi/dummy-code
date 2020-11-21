import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
  Variants,
} from 'framer-motion';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateRequestStatus } from '../../../store/modules/app/actions';
import { RootState } from '../../../store/modules/rootTypes';
import { useModal } from '../../../utils';
import { Button } from '../../index';
import {
  ModalOverlay,
  ModalContainer,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalButtons,
  IconBox,
} from './styles';

const variants: Variants = {
  in: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      bounce: 0.15,
    },
  },
  out: { y: '100%' },
};

const tickVariants = {
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 100,
};

interface RequestModalProps {
  app: RootState['app'];
}

const RequestsModalComponent = ({ app }: RequestModalProps) => {
  const { isOpen, onClose, onOpen } = useModal();
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const x = useMotionValue(1);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 1], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  const colorVariants = useMemo(() => {
    switch (app.requestStatus) {
      case 'PENDING':
        return 'yellow';
      case 'REJECT':
        return 'red';
      default:
        return 'green';
    }
  }, [app.requestStatus]);

  const { title, Description } = useMemo(() => {
    if (app.requestStatus === 'PENDING') {
      return {
        title: 'Carregando...',
        Description: 'Aguarde, estamos processando sua solicitação',
      };
    }

    if (app.requestStatus === 'REJECT') {
      return {
        title: 'Não deu :(',
        Description:
          'Desculpe, ocorreu um erro e não conseguimos resolver sua solicitação.',
      };
    }

    return {
      title: 'Resolvido! =)',
      Description: 'Prontinho! Deu tudo certo.',
    };
  }, [app.requestStatus]);

  const handleCloseModal = useCallback(() => {
    dispatch(UpdateRequestStatus(null));
    onClose();
  }, [onClose, dispatch]);

  useEffect(() => {
    let timeout: number;

    if (app.requestStatus) {
      onOpen();

      if (app.requestStatus !== 'PENDING' && app.requestStatus !== null) {
        timeout = setTimeout(() => {
          dispatch(UpdateRequestStatus(null));
        }, 5000);
      }
    } else {
      onClose();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [app.requestStatus, onOpen, onClose, dispatch]);

  return (
    <ModalOverlay>
      <ModalContainer
        animate={isOpen ? 'in' : 'out'}
        initial="out"
        exit="out"
        variants={variants}
        onAnimationComplete={() => {
          setIsChecked(true);
        }}
      >
        <ModalHeader />
        <ModalBody>
          <IconBox color={colorVariants}>
            {app.requestStatus === 'PENDING' && <PendingIcon />}

            {app.requestStatus === 'RESOLVE' && (
              <SuccessIcon {...{ isChecked, pathLength, opacity }} />
            )}

            {app.requestStatus === 'REJECT' && (
              <ErrorIcon {...{ isChecked, crossPathA, crossPathB }} />
            )}
          </IconBox>

          <h1>{title}</h1>
          <h2>{Description}</h2>
        </ModalBody>
        <ModalFooter>
          <ModalButtons>
            {app.requestStatus !== 'PENDING' && (
              <Button variant={colorVariants} onClick={handleCloseModal}>
                <FiX />
                Fechar
              </Button>
            )}
          </ModalButtons>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

const PendingIcon = () => {
  return (
    <motion.svg
      stroke="currentColor"
      fill="none"
      strokeWidth="3"
      viewBox="0 0 24 24"
      width="90px"
      height="90px"
      initial="unchecked"
    >
      <motion.path
        d="M 2, 12 a 1, 1 1 1,0 20,0 a 1, 1 1 1,0 -20,0"
        animate={{
          pathLength: [0, 1, 0],
          rotateZ: [0, -180, 359],
        }}
        variants={tickVariants}
        transition={{
          ...transition,
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};

type SuccessIconProps = {
  isChecked: boolean;
  opacity: MotionValue<number>;
  pathLength: MotionValue<number>;
};

const SuccessIcon = ({ isChecked, opacity, pathLength }: SuccessIconProps) => {
  return (
    <motion.svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="90px"
      height="90px"
      initial="unchecked"
    >
      <motion.path
        d="M22 11V12a10 10 0 1 1-5-9"
        fill="transparent"
        animate={isChecked ? 'checked' : 'unchecked'}
        style={{ opacity }}
        custom={isChecked}
        transition={transition}
      />

      <motion.path
        d="M 8 10 L 12 14 L 23 3"
        fill="transparent"
        strokeWidth="2"
        stroke="currentColor"
        animate={isChecked ? 'checked' : 'unchecked'}
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
        transition={transition}
      />
    </motion.svg>
  );
};

type ErrorIconProps = {
  isChecked: boolean;
  crossPathA: MotionValue<number>;
  crossPathB: MotionValue<number>;
};

const ErrorIcon = ({ isChecked, crossPathA, crossPathB }: ErrorIconProps) => {
  return (
    <motion.svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="90px"
      height="90px"
    >
      <motion.path
        fill="none"
        strokeWidth="2"
        d="M 2, 12 a 10, 10 0 1,0 20,0 a 10, 10 0 1,0 -20,0"
      />
      <motion.path
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 100,
        }}
        variants={tickVariants}
        fill="transparent"
        strokeWidth="2"
        stroke="currentColor"
        d="M8,16 L 16,8 L 16"
        animate={isChecked ? 'checked' : 'unchecked'}
        style={{ pathLength: crossPathA }}
        custom={isChecked}
      />
      <motion.path
        fill="transparent"
        variants={tickVariants}
        strokeWidth="2"
        stroke="currentColor"
        d="M8 8 16,16"
        animate={isChecked ? 'checked' : 'unchecked'}
        custom={isChecked}
        style={{ pathLength: crossPathB }}
      />
    </motion.svg>
  );
};

const RequestsModal = () => {
  const container =
    document.getElementById('root') ??
    document.getElementById('main-layout') ??
    document.createElement('div');

  const { app } = useSelector((state: RootState) => ({ app: state.app }));
  const [isOpen, setIsOpen] = useState(!!app.requestStatus);

  useEffect(() => {
    setIsOpen(!!app.requestStatus);
  }, [app.requestStatus]);

  return ReactDOM.createPortal(
    isOpen ? <RequestsModalComponent {...{ app }} /> : <></>,
    container,
  );
};

export default RequestsModal;

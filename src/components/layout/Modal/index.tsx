import React, { ReactNode, useCallback } from 'react';
import { Transition, Variants } from 'framer-motion';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import { Button } from '../..';
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalOverlay,
} from './styles';

const variants: Variants = {
  isOpen: { scale: 1, opacity: 1 },
  isClosed: { scale: 0.3, opacity: 0 },
};

const transition: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 12,
};

interface ModalProps {
  children?: ReactNode;
  $isFullscreen?: boolean;
  Header: ReactNode;
  Footer?: ReactNode;

  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent = ({
  children,
  $isFullscreen = false,
  Header,
  Footer,

  isOpen,
  onClose,
}: ModalProps) => {
  const handleStopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        onClick={handleStopPropagation}
        $isFullscreen={$isFullscreen}
        variants={variants}
        transition={transition}
        animate={isOpen ? 'isOpen' : 'isClosed'}
        initial="isClosed"
      >
        <ModalHeader>
          {Header || <b />}
          <Button size="xs" variant="red" onClick={onClose}>
            <FiX />
          </Button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {Footer && <ModalFooter>{Footer}</ModalFooter>}
      </ModalContent>
    </ModalOverlay>
  );
};

const Modal = (props: ModalProps) => {
  const container =
    document.getElementById('root') ??
    document.getElementById('main-layout') ??
    document.createElement('div');

  const { isOpen } = props;

  return ReactDOM.createPortal(
    isOpen ? <ModalComponent {...props} /> : <></>,
    container,
  );
};

export default Modal;

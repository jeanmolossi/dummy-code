import React, { ReactNode, useState } from 'react';
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import ReactDOM from 'react-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../../index';
import {
  ModalContainer,
  ModalBody,
  IconBox,
  ModalButtons,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from './styles';

interface SuccessModalProps {
  isOpen: boolean;
  onClose(): void;
  Header?: ReactNode;
  Buttons?: ReactNode;
  Footer?: ReactNode;
  title: string;
  Description: ReactNode;
  goRoute: string;
  textButton: string;
}

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

const SuccessModalComponent = (props: SuccessModalProps) => {
  const {
    Header,
    Buttons,
    Footer,
    goRoute,
    textButton,
    title,
    Description,
    isOpen,
  } = props;

  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 1], [0, 1]);

  const [isChecked, setIsChecked] = useState(false);

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
        {Header && <ModalHeader>{Header}</ModalHeader>}
        <ModalBody>
          <IconBox>
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
          </IconBox>
          <h1>{title}</h1>
          <h2>{Description}</h2>
        </ModalBody>
        <ModalFooter>
          {goRoute && (
            <Button as={Link} to={goRoute}>
              <FiArrowLeft />
              {textButton}
            </Button>
          )}
          {Buttons && <ModalButtons>{Buttons}</ModalButtons>}
          {Footer && Footer}
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

const SuccessModal = (props: SuccessModalProps) => {
  const container =
    document.getElementById('root') ??
    document.getElementById('main-layout') ??
    document.createElement('div');

  const { isOpen } = props;

  return ReactDOM.createPortal(
    isOpen ? <SuccessModalComponent {...props} /> : <></>,
    container,
  );
};

export default SuccessModal;

import React, { ReactNode, useState } from 'react';
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import ReactDOM from 'react-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../../index';
import {
  ModalOverlay,
  ModalContainer,
  ModalBody,
  IconBox,
  ModalFooter,
  ModalButtons,
  ModalHeader,
} from './styles';

interface UnSuccessModalProps {
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

const UnsuccessModalComponent = (props: UnSuccessModalProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const x = useMotionValue(1);

  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

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
          </IconBox>
          <h1>{title}</h1>
          <h2>{Description}</h2>
        </ModalBody>
        <ModalFooter>
          {goRoute && (
            <Button variant="red" as={Link} to={goRoute}>
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

const UnsuccessModal = (props: UnSuccessModalProps) => {
  const container =
    document.getElementById('root') ??
    document.getElementById('main-layout') ??
    document.createElement('div');

  const { isOpen } = props;

  return ReactDOM.createPortal(
    isOpen ? <UnsuccessModalComponent {...props} /> : <></>,
    container,
  );
};
export default UnsuccessModal;

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const flexPropsDefault = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  z-index: 9999;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: var(--dark-background);
`;

export const ModalContainer = styled(motion.div)`
  height: 100%;
  ${flexPropsDefault}
`;

export const ModalHeader = styled(motion.div)`
  flex: 0.3;
  ${flexPropsDefault}
`;

export const ModalBody = styled(motion.div)`
  flex: 1;
  ${flexPropsDefault}

  row-gap: var(--spacing-lg);

  > h2 {
    color: var(--grey-100);
  }

  > h1,
  > h2 {
    text-align: center;
    padding: 0 var(--padding-xxl);
  }
`;

export const IconBox = styled(motion.div)`
  color: var(--red-200);
  width: 9rem;
  height: 9rem;
`;

export const ModalFooter = styled(motion.div)`
  flex: 0.3;
  ${flexPropsDefault}
`;

export const ModalButtons = styled(motion.div)``;

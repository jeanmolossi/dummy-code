import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { Button } from '../../index';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000070;
  z-index: 999999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ModalContentProps {
  $isFullscreen?: boolean;
}

export const ModalContent = styled(motion.div)<ModalContentProps>`
  min-width: 40vw;
  min-height: 20vh;
  border-radius: var(--radii-lg);
  padding: var(--padding-md);
  position: relative;

  background-color: #333;

  ${props =>
    props.$isFullscreen &&
    css`
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    `}
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);

  > ${Button} {
    top: var(--spacing-sm);
    right: var(--spacing-sm);

    justify-self: flex-end;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  height: 100%;
`;

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

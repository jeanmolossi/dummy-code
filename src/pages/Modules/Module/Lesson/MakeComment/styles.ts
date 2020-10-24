import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Button } from '../../../../../components';

export const Container = styled.div`
  border-top: 0.1rem solid var(--grey-200);
  display: flex;
`;

export const AuthUser = styled.div`
  margin-right: var(--spacing-sm);
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: var(--radii-full);
  background-color: var(--green-100);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputController = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: var(--spacing-md);
  flex: 1;

  > ${Button} {
  }
`;

export const InputBox = styled(motion.div)`
  flex: 1;
  background-color: var(--dark-200);
  border-radius: var(--radii-sm);
  z-index: 1;

  > input {
    padding: var(--padding-md) var(--padding-sm);
    font-size: var(--padding-md);

    width: 100%;
    background: transparent;
    border: 0;
    color: white;

    ::placeholder {
      color: var(--grey-100);
    }
  }
`;

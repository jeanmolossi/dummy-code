import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Button } from '../../../../../../components';

export const Container = styled.div`
  border-top: 0.1rem solid var(--grey-200);
`;

export const AuthUser = styled.div`
  margin-right: var(--spacing-sm);
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div``;

export const InputController = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: var(--spacing-md);
  flex: 1;

  > ${Button} {
    position: absolute;
    right: 0;
  }
`;

export const InputBox = styled(motion.div)`
  flex: 1;
  background-color: var(--dark-200);
  border-radius: var(--radii-sm);

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

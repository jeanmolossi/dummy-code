import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.button).attrs({ type: 'button' })`
  border: 0;
  background: transparent;

  > a {
    color: var(--grey-100);
    padding: var(--padding-md);
    font-size: var(--padding-lg);
    background: transparent;
    border-radius: var(--radii-full);

    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      background: var(--green-200);
      color: #fff;
    }
  }
`;

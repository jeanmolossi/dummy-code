import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const MenuItem = styled(Link)`
  color: #fff;
  background: none;
  border: 0;
  font-size: 2rem;
  width: 80%;
`;

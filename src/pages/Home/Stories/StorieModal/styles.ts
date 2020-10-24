import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StorieViewModal = styled(motion.div)`
  position: fixed !important;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: #3ff;
  z-index: 9999;

  > h3 {
    position: absolute;
    bottom: var(--spacing-md);
    font-size: 36pt;
    z-index: 3333;
  }

  > a {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

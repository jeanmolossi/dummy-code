import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StorieContainer = styled(motion.div)`
  flex-shrink: 0;
  flex-basis: 14.3rem;
  width: 14.3rem;
  height: 20rem;
  position: relative;
  border-radius: var(--radii-md);
  overflow: hidden;

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

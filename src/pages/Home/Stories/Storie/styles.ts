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

  > h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--spacing-md);
    background-image: linear-gradient(
      0deg,
      #000000 0%,
      #1f2e3598 70%,
      #1f2e3500 100%
    );
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

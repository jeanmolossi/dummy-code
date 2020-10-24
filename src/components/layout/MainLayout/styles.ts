import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AnimationContainer = styled(motion.div)`
  display: block;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #333;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 1000;
`;

export const CloseButton = styled(motion.button)`
  position: absolute;
  z-index: 99;
  background: var(--red-300);
  color: white;
  border: 0;
  padding: var(--padding-md);
  border-radius: var(--radii-full);
  display: flex;
  place-items: center;
  place-content: center;
  top: 0;
  left: 0;
`;

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-color: var(--dark-background);
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: -9.6rem;
`;

export const DrawerMenu = styled(motion.div)`
  width: 55vw;
  height: 100vh;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

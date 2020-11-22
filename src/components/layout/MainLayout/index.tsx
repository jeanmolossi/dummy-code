import React, { ReactNode } from 'react';
import { Transition, useCycle, Variants } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import BottomTabs from '../BottomTabs';
import RequestsModal from '../RequestsModal';
import DrawerContent from './DrawerContent';
import {
  AnimationContainer,
  CloseButton,
  Container,
  Overlay,
  DrawerMenu,
} from './styles';

interface MainLayoutProps {
  children?: ReactNode;
  showBottomTabs?: boolean;
}

const buttonVariants: Variants = {
  opened: { x: '0' },
  closed: { x: '-100%' },
};

const variants: Variants = {
  translated: {
    x: '50%',
    scale: 0.8,
    height: '100vh',
    overflow: 'hidden',
  },
  normal: {
    x: '0',
    scale: 1,
    height: 'initial',
    overflow: 'initial',
  },
};

const animationContainerVariants: Variants = {
  opened: { height: '100vh', overflow: 'hidden' },
  closed: { height: 'auto', overflow: 'initial' },
};

const transition: Transition = {
  type: 'tween',
};

const MainLayout = ({ children, showBottomTabs = true }: MainLayoutProps) => {
  const [translated, cycle] = useCycle(0, 1);

  return (
    <AnimationContainer
      initial={false}
      animate={translated ? 'opened' : 'closed'}
      variants={animationContainerVariants}
    >
      <DrawerMenu>
        <CloseButton
          type="button"
          onClick={() => cycle()}
          animate={translated ? 'opened' : 'closed'}
          variants={buttonVariants}
        >
          <FiX />
        </CloseButton>
        <DrawerContent opened={!!translated} />
      </DrawerMenu>

      <Container
        id="main-layout"
        animate={translated ? 'translated' : 'normal'}
        variants={variants}
        transition={transition}
      >
        {translated ? <Overlay onClick={() => cycle()} /> : ''}
        {children}
        {showBottomTabs && !translated && (
          <BottomTabs toggleDrawer={() => cycle()} />
        )}
      </Container>

      <RequestsModal />
    </AnimationContainer>
  );
};

export default MainLayout;

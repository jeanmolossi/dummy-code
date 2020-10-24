import React, { ReactNode } from 'react';
import BottomTabs from '../BottomTabs';
import { Container } from './styles';

interface MainLayoutProps {
  children?: ReactNode;
  showBottomTabs?: boolean;
}

const MainLayout = ({ children, showBottomTabs = true }: MainLayoutProps) => {
  return (
    <Container id="main-layout">
      {children}
      {showBottomTabs && <BottomTabs />}
    </Container>
  );
};

export default MainLayout;

import React, { ReactNode } from 'react';
import BottomTabs from '../BottomTabs';
import { Container } from './styles';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container id="main-layout">
      {children}
      <BottomTabs />
    </Container>
  );
};

export default MainLayout;

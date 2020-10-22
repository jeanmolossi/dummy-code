import React, { ReactNode } from 'react';
import { Container } from './styles';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Container id="main-layout">{children}</Container>;
};

export default MainLayout;

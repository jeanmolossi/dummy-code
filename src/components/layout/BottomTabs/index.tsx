import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import ReactDOM from 'react-dom';
import {
  FiHeart,
  FiHome,
  FiMenu,
  FiMessageSquare,
  FiVideo,
} from 'react-icons/fi';
import IconButton from './IconButton';
import { Container } from './styles';

interface BottomTabsProps {
  toggleDrawer(): void;
}

const BottomTabsComponent = ({ toggleDrawer }: BottomTabsProps) => {
  return (
    <AnimateSharedLayout>
      <Container>
        <IconButton
          to="/drawer-menu"
          asButton
          onClick={() => toggleDrawer()}
          icon={FiMenu}
        />
        <IconButton to="/favorites" icon={FiHeart} />
        <IconButton to="/home" icon={FiHome} />
        <IconButton to="/modules" icon={FiVideo} />
        <IconButton to="/chat" icon={FiMessageSquare} />
      </Container>
    </AnimateSharedLayout>
  );
};

const BottomTabs: React.FC<BottomTabsProps> = props => {
  const container =
    document.getElementById('root') ?? document.createElement('div');
  return ReactDOM.createPortal(<BottomTabsComponent {...props} />, container);
};

export default BottomTabs;

import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import {
  FiHeart,
  FiHome,
  FiMessageSquare,
  FiUser,
  FiVideo,
} from 'react-icons/fi';
import IconButton from './IconButton';
import { Container } from './styles';

const BottomTabs: React.FC = () => {
  return (
    <AnimateSharedLayout>
      <Container>
        <IconButton to="/profile" icon={FiUser} />
        <IconButton to="/favorites" icon={FiHeart} />
        <IconButton to="/home" icon={FiHome} />
        <IconButton to="/lessons" icon={FiVideo} />
        <IconButton to="/chat" icon={FiMessageSquare} />
      </Container>
    </AnimateSharedLayout>
  );
};

export default BottomTabs;

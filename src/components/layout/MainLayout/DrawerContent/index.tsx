import React, { useCallback } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Variants } from 'framer-motion';
import {
  FiBell,
  FiHeart,
  FiHome,
  FiLogOut,
  FiUser,
  FiVideo,
} from 'react-icons/fi';
import { Container, MenuItem } from './styles';

interface DrawerContentProps {
  opened: boolean;
}

const variants: Variants = {
  opened: { x: '0' },
  closed: { x: '-100%' },
};

const DrawerContent = ({ opened }: DrawerContentProps) => {
  const signOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  return (
    <Container variants={variants} animate={opened ? 'opened' : 'closed'}>
      <MenuItem to="/home">
        <FiHome /> Início
      </MenuItem>

      <MenuItem to="/profile">
        <FiUser /> Perfil
      </MenuItem>

      <MenuItem to="/favorites">
        <FiHeart /> Favoritos
      </MenuItem>

      <MenuItem to="/notifications">
        <FiBell /> Notificações
      </MenuItem>

      <MenuItem to="/modules">
        <FiVideo /> Aulas
      </MenuItem>

      <MenuItem to="/" onClick={signOut}>
        <FiLogOut /> Sair
      </MenuItem>
    </Container>
  );
};

export default DrawerContent;

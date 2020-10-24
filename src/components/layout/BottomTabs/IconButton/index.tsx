import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { IconType } from 'react-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { Container } from './styles';

interface IconButtonProps {
  to: string;
  icon: IconType;
}

const variants: Variants = {
  in: { y: '0' },
  out: { y: '100%' },
};

const IconButton = ({ to, icon: Icon }: IconButtonProps) => {
  return (
    <Container variants={variants} initial="out" animate="in" exit="out">
      <NavLink to={to}>
        <Icon />
      </NavLink>
    </Container>
  );
};

export default IconButton;

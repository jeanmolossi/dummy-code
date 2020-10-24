import React from 'react';
import { Variants } from 'framer-motion';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
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

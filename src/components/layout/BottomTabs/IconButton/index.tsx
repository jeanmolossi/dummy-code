import React from 'react';
import { Variants } from 'framer-motion';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { Button } from '../../..';
import { Container } from './styles';

interface IconButtonProps {
  to: string;
  icon: IconType;
  onClick?(): void;
  asButton?: boolean;
}

const variants: Variants = {
  in: { y: '0' },
  out: { y: '100%' },
};

const IconButton = ({
  to,
  onClick,
  icon: Icon,
  asButton = false,
}: IconButtonProps) => {
  return (
    <Container variants={variants} initial="out" animate="in" exit="out">
      {!asButton ? (
        <NavLink to={to}>
          <Icon />
        </NavLink>
      ) : (
        <Button onClick={onClick}>
          <Icon />
        </Button>
      )}
    </Container>
  );
};

export default IconButton;

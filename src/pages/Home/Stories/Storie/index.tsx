import React from 'react';
import { Link } from 'react-router-dom';
import { StorieContainer } from './styles';

interface StorieProps {
  id: string;
  image: string;
  user: {
    id: string;
    name: string;
  };
}

const Storie = ({ id, image, user }: StorieProps) => {
  const { name } = user;

  return (
    <StorieContainer layoutId={`image-${id}`}>
      <h3>{name}</h3>
      <Link to={`/home/${id.toString()}`} />
      <img src={image} alt="" />
    </StorieContainer>
  );
};

export default Storie;

import React from 'react';
import { Link } from 'react-router-dom';
import { StorieContainer } from './styles';

interface StorieProps {
  index: number;
  source: string;
}

const Storie = ({ index, source }: StorieProps) => {
  return (
    <StorieContainer layoutId={`image-${index}`}>
      <Link to={`/home/${index.toString()}`} />
      <img src={source} alt="" />
    </StorieContainer>
  );
};

export default Storie;

import React from 'react';
import { Container, Images, ImageContainer } from './styles';

interface PostProps {
  id: string;
  text: string;
  images: string[];
}

const Post = ({ id, text, images }: PostProps) => {
  return (
    <Container>
      <p>{text}</p>
      <Images>
        {images.map((image, index) => (
          <ImageContainer key={index.toString()}>
            <img src={image} alt="Imagem" />
          </ImageContainer>
        ))}
      </Images>
    </Container>
  );
};

export default Post;

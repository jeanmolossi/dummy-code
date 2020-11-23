import React from 'react';
import { Post as PostType } from '../../../../../store/modules/posts';
import { Container, Images, ImageContainer } from './styles';

type PostProps = PostType;

const Post = ({ post, images }: PostProps) => {
  return (
    <Container>
      <p>{post}</p>
      <Images>
        {images &&
          images.map((image, index) => (
            <ImageContainer key={index.toString()}>
              <img src={image} alt="Imagem" />
            </ImageContainer>
          ))}
      </Images>
    </Container>
  );
};

export default Post;

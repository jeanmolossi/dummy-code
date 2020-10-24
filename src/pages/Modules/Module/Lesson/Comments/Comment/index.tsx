import React from 'react';
import { Avatar } from '../../MakeComment/styles';
import { Container, Header, HeaderContent } from './styles';

const Comment: React.FC = () => {
  return (
    <Container>
      <Header>
        <Avatar>
          <img
            src="http://localhost:3000/files/woman-avatar.png"
            alt="Avatar"
          />
        </Avatar>

        <HeaderContent>
          <span>Nome</span>
          <small>Há 20 minutos</small>
        </HeaderContent>
      </Header>

      <p>
        We’re interested in your ideas and would be glad to build something
        bigger out of it. Share your ideas about features/design and we’ll bring
        them on to our full case of this product design.
      </p>
    </Container>
  );
};

export default Comment;

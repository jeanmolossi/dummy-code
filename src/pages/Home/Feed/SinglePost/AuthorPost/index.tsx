import React from 'react';
import { formatDistance, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import { Container, Avatar, UserInfo } from './styles';

interface AuthorPostProps {
  id: string;
  name: string;
  avatar: string;
  created_at: string;
}

const AuthorPost = ({ id, name, avatar, created_at }: AuthorPostProps) => {
  const date = formatDistance(new Date(), parseISO(created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Container>
      <Avatar
        as={Link}
        to={`/profile/${id}`}
        variant={Number(id) % 2 === 0 ? 'red' : 'yellow'}
      >
        <img src={avatar} alt={name} />
      </Avatar>
      <UserInfo>
        <h4>{name}</h4>
        <h5>{date}</h5>
      </UserInfo>
    </Container>
  );
};

export default AuthorPost;

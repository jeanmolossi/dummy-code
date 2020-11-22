import React from 'react';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import { User } from '../../../../../store/modules/user';
import { Container, Avatar, UserInfo } from './styles';

interface AuthorPostProps extends User {
  created_at: number;
}

const AuthorPost = ({ uid, name, photoURL, created_at }: AuthorPostProps) => {
  const date = formatDistance(created_at, new Date(), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Container>
      <Avatar
        as={Link}
        to={`/profile/${uid}`}
        variant={Number(uid) % 2 === 0 ? 'red' : 'yellow'}
      >
        {photoURL && <img src={photoURL} alt={name} />}
      </Avatar>
      <UserInfo>
        <h4>{name}</h4>
        <h5>{date}</h5>
      </UserInfo>
    </Container>
  );
};

export default AuthorPost;

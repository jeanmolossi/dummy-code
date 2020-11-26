import React from 'react';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiEdit, FiMoreVertical, FiTrash2, FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal } from '../../../../../components';
import { RootState } from '../../../../../store/modules/rootTypes';
import { User } from '../../../../../store/modules/user';
import { useModal } from '../../../../../utils';
import {
  Container,
  Avatar,
  UserInfo,
  MoreOptions,
  ButtonsContainer,
} from './styles';

interface AuthorPostProps extends User {
  created_at: number;
}

const AuthorPost = ({ uid, name, photoURL, created_at }: AuthorPostProps) => {
  const {
    isOpen: isOpenOptions,
    onClose: onCloseOptions,
    onOpen: onOpenOptions,
  } = useModal();

  const { authUser } = useSelector((state: RootState) => ({
    authUser: state.user.authUser,
  }));

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

      {uid === authUser.uid && (
        <MoreOptions onClick={onOpenOptions}>
          <FiMoreVertical size={18} />
        </MoreOptions>
      )}

      <Modal
        {...{ isOpen: isOpenOptions, onClose: onCloseOptions }}
        Header={<h2>Mais ações</h2>}
      >
        <h3>O que você deseja fazer neste post ?</h3>

        <ButtonsContainer>
          <Button variant="green" $translucent>
            <FiEdit /> Editar
          </Button>

          <Button variant="red">
            <FiTrash2 /> Deletar
          </Button>

          <Button variant="yellow" onClick={onCloseOptions}>
            <FiX /> Cancelar
          </Button>
        </ButtonsContainer>
      </Modal>
    </Container>
  );
};

export default AuthorPost;

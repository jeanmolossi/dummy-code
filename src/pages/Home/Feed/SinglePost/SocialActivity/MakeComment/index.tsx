import React, { useState } from 'react';
import { Form } from '@unform/web';
import { FiSend } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Button } from '../../../../../../components';
import { RootState } from '../../../../../../store/modules/rootTypes';
import { Avatar } from '../../AuthorPost/styles';
import { Container, AuthUser, InputController, InputBox } from './styles';

interface MakeCommentProps {
  id: string;
  postId: string;
}

const MakeComment = ({ id, postId }: MakeCommentProps) => {
  const { authUser } = useSelector((state: RootState) => ({
    authUser: state.user.authUser,
  }));

  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <AuthUser>
        <Avatar variant="green">
          <img
            src={
              authUser.photoURL ||
              `${process.env.REACT_APP_LOCAL_URL}/files/man-avatar.png`
            }
            alt="Auth user"
          />
        </Avatar>
      </AuthUser>

      <InputController
        as={Form}
        onSubmit={() => {
          console.log();
        }}
      >
        <InputBox
          variants={{
            focused: { marginRight: 0 },
            unfocused: { marginRight: 56 },
          }}
          initial="unfocused"
          animate={focused ? 'focused' : 'unfocused'}
        >
          <input
            placeholder="Deixe um comentário..."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </InputBox>

        <Button
          variants={{
            focused: { x: '100%', opacity: 0 },
            unfocused: { x: 0, opacity: 1 },
          }}
          initial="unfocused"
          animate={focused ? 'focused' : 'unfocused'}
        >
          <FiSend />
        </Button>
      </InputController>
    </Container>
  );
};

export default MakeComment;

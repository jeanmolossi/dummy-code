import React from 'react';
import { Form } from '@unform/web';
import { FiSend } from 'react-icons/fi';
import { Button } from '../../../../../components';
import {
  Container,
  AuthUser,
  Avatar,
  InputBox,
  InputController,
} from './styles';

interface MakeCommentProps {
  lessonId: string;
}

const MakeComment = ({ lessonId }: MakeCommentProps) => {
  return (
    <Container>
      <AuthUser>
        <Avatar>
          <img
            src="http://192.168.0.104:3000/files/man-avatar.png"
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
        >
          <input placeholder="Deixe um comentário" />
        </InputBox>

        <Button $translucent>
          <FiSend />
        </Button>
      </InputController>
    </Container>
  );
};

export default MakeComment;

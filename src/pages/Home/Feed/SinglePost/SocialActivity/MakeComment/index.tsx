import React, { useState } from 'react';
import { Form } from '@unform/web';
import { FiSend } from 'react-icons/fi';
import { Button } from '../../../../../../components';
import { Avatar } from '../../AuthorPost/styles';
import { Container, AuthUser, InputController, InputBox } from './styles';

interface MakeCommentProps {
  id: string;
  postId: string;
}

const MakeComment = ({ id, postId }: MakeCommentProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <AuthUser>
        <Avatar variant="green">
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

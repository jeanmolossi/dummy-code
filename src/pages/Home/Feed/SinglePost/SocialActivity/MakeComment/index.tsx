import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useField } from '@unform/core';
import { Form } from '@unform/web';
import { FiSend } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../../../components';
import { SendCommentPost } from '../../../../../../store/modules/posts';
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

  const dispatch = useDispatch();

  const [focused, setFocused] = useState(false);

  const handleSubmit = useCallback(
    (data, { reset }) => {
      const { comment } = data;

      dispatch(
        SendCommentPost({
          postId,
          commentAuthorId: id,
          comment,
        }),
      );

      reset();
    },
    [dispatch, id, postId],
  );

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

      <InputController as={Form} onSubmit={handleSubmit}>
        <InputBox
          variants={{
            focused: { marginRight: 0 },
            unfocused: { marginRight: 56 },
          }}
          initial="unfocused"
          animate={focused ? 'focused' : 'unfocused'}
        >
          <SimpleInput name="comment" setFocused={setFocused} />
        </InputBox>

        <Button
          variants={{
            focused: { x: '100%', opacity: 0 },
            unfocused: { x: 0, opacity: 1 },
          }}
          initial="unfocused"
          animate={focused ? 'focused' : 'unfocused'}
          type="submit"
        >
          <FiSend />
        </Button>
      </InputController>
    </Container>
  );
};

interface SimpleInputProps {
  name: string;
  setFocused: Dispatch<SetStateAction<boolean>>;
}

const SimpleInput = ({ name, setFocused }: SimpleInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <input
      ref={inputRef}
      name="commentInput"
      placeholder="Deixe um comentário..."
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      autoComplete="off"
    />
  );
};

export default MakeComment;

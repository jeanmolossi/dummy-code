import React from 'react';
import { FiHeart, FiMessageSquare } from 'react-icons/fi';
import MakeComment from './MakeComment';
import { Container, Comments, Likes } from './styles';

interface SocialActivityProps {
  id: string;
  postId: string;
  comments: number;
  likes: number;
}

const SocialActivity = ({
  id,
  postId,
  comments,
  likes,
}: SocialActivityProps) => {
  return (
    <Container>
      <div>
        <Comments>
          <FiMessageSquare />
          {comments} comentários
        </Comments>
        <Likes>
          <FiHeart />
          {likes} curtidas
        </Likes>
      </div>

      <MakeComment {...{ id, postId }} />
    </Container>
  );
};

export default SocialActivity;

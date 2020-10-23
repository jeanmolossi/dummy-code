import React from 'react';
import { ApiPostsResponse } from '../index';
import AuthorPost from './AuthorPost';
import Post from './Post';
import SocialActivity from './SocialActivity';
import { Container } from './styles';

type SinglePostProps = ApiPostsResponse;

const SinglePost = ({
  id,
  post,
  comments,
  user,
  likes,
  created_at,
}: SinglePostProps) => {
  return (
    <Container>
      <AuthorPost {...user} created_at={created_at} />

      <Post {...post} />

      <SocialActivity {...{ id, postId: post.id, comments, likes }} />
    </Container>
  );
};

export default SinglePost;

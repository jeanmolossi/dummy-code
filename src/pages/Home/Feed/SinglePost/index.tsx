import React, { useMemo } from 'react';
import { FeedPosts } from '../../../../store/modules/posts';
import AuthorPost from './AuthorPost';
import Post from './Post';
import SocialActivity from './SocialActivity';
import { Container } from './styles';

type SinglePostProps = FeedPosts;

const SinglePost = ({ post, author }: SinglePostProps) => {
  const { uid, created_at, comments, likes, postId } = useMemo(
    () => ({ ...post, ...author }),
    [post, author],
  );

  return (
    <Container>
      <AuthorPost {...author} created_at={created_at} />

      <Post {...post} />

      <SocialActivity {...{ uid, postId, comments: comments.length, likes }} />
    </Container>
  );
};

export default SinglePost;

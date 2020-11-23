import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetFeed } from '../../../store/modules/posts';
import { RootState } from '../../../store/modules/rootTypes';
import SinglePost from './SinglePost';
import { Container } from './styles';

const Feed = () => {
  const dispatch = useDispatch();

  const { feed } = useSelector((state: RootState) => ({
    feed: state.posts.feed,
  }));

  useEffect(() => {
    dispatch(GetFeed());
  }, [dispatch]);

  return (
    <Container>
      {feed.map(({ post, author }) => (
        <SinglePost key={post.postId} {...{ post, author }} />
      ))}
    </Container>
  );
};

export default Feed;

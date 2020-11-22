import React, { useEffect, useState } from 'react';
import { FeedPosts, getFeed } from '../../../repositories/postRepository';
import SinglePost from './SinglePost';
import { Container } from './styles';

const Feed = () => {
  const [posts, setPosts] = useState([] as FeedPosts[]);

  useEffect(() => {
    getFeed().then(feedPosts => {
      setPosts(feedPosts);
    });
  }, []);

  return (
    <Container>
      {posts.map(({ post, author }) => (
        <SinglePost key={post.postId} {...{ post, author }} />
      ))}
    </Container>
  );
};

export default Feed;

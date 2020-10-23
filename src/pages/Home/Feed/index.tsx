import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import SinglePost from './SinglePost';
import { Container } from './styles';

export interface ApiPostsResponse {
  id: string;
  created_at: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  post: {
    id: string;
    text: string;
    images: string[];
  };
  comments: number;
  likes: number;
}

const Feed = () => {
  const [posts, setPosts] = useState([] as ApiPostsResponse[]);

  useEffect(() => {
    api.get<ApiPostsResponse[]>(`/posts`).then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Container>
      {posts.map(post => (
        <SinglePost key={post.id} {...post} />
      ))}
    </Container>
  );
};

export default Feed;

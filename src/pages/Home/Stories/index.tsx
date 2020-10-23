import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import Storie from './Storie';
import StorieModal from './StorieModal';
import { HorizontalScrollView } from './styles';

export interface ApiStoriesResponse {
  id: string;
  image: string;
  user: {
    id: string;
    name: string;
  };
}

const Stories = () => {
  const { id } = useParams<{ id: string }>();

  const [stories, setStories] = useState<ApiStoriesResponse[]>([]);

  useEffect(() => {
    api.get<ApiStoriesResponse[]>(`/stories`).then(response => {
      setStories(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <HorizontalScrollView>
        {stories.map(storie => (
          <Storie key={storie.id} {...storie} />
        ))}
      </HorizontalScrollView>

      <StorieModal id={id} stories={stories} />
    </>
  );
};

export default Stories;

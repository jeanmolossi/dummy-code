import React from 'react';
import { useParams } from 'react-router-dom';
import Storie from './Storie';
import StorieModal from './StorieModal';
import { HorizontalScrollView } from './styles';

const Stories = () => {
  const { id } = useParams<{ id: string }>();

  const sources = [
    'http://192.168.0.104:3000/files/image1.jpg',
    'http://192.168.0.104:3000/files/image2.jpg',
    'http://192.168.0.104:3000/files/image3.jpg',
    'http://192.168.0.104:3000/files/image4.jpg',
    'http://192.168.0.104:3000/files/image1.jpg',
    'http://192.168.0.104:3000/files/image2.jpg',
    'http://192.168.0.104:3000/files/image3.jpg',
    'http://192.168.0.104:3000/files/image4.jpg',
  ];

  return (
    <>
      <HorizontalScrollView>
        {sources.map((source, index) => (
          <Storie key={index.toString()} index={index} source={source} />
        ))}
      </HorizontalScrollView>

      <StorieModal id={id} sources={sources} />
    </>
  );
};

export default Stories;

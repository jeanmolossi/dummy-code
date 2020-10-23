import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ApiStoriesResponse } from '../index';
import { StorieViewModal } from './styles';

interface StorieModalProps {
  id: string;
  stories: ApiStoriesResponse[];
}

const StorieModal = ({ id, stories }: StorieModalProps) => {
  const [source, setSource] = useState('');

  useEffect(() => {
    const StorieIndex = stories.findIndex(storie => storie.id === id);

    if (StorieIndex >= 0) {
      setSource(stories[StorieIndex].image);
    }
  }, [id, stories]);

  return (
    <AnimatePresence>
      {id && (
        <StorieViewModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layoutId={`image-${id}`}
        >
          <Link to="/home" />
          {source && <img src={source} alt="" />}
        </StorieViewModal>
      )}
    </AnimatePresence>
  );
};

export default StorieModal;

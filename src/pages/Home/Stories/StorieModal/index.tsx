import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StorieViewModal } from './styles';

interface StorieModalProps {
  id: string;
  sources: string[];
}

const StorieModal = ({ id, sources }: StorieModalProps) => {
  return (
    <AnimatePresence>
      {id && (
        <StorieViewModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layoutId={`image-${id}`}
        >
          <Link to="/home" />
          <img src={sources[Number(id)]} alt=" " />
        </StorieViewModal>
      )}
    </AnimatePresence>
  );
};

export default StorieModal;

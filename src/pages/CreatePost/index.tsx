import React from 'react';
import { MainLayout } from '../../components';
import CamComponent from './Cam';

// import { Container } from './styles';

const CreatePost: React.FC = () => {
  return (
    <MainLayout showBottomTabs>
      <h1>Criar post</h1>

      <CamComponent />
    </MainLayout>
  );
};

export default CreatePost;

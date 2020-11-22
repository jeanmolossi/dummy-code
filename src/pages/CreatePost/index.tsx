import React from 'react';
import { MainLayout, Cam as CamComponent } from '../../components';
import { Container } from './styles';

const CreatePost: React.FC = () => {
  return (
    <MainLayout showBottomTabs>
      <Container>
        <h1>Criar post</h1>

        <CamComponent />
      </Container>
    </MainLayout>
  );
};

export default CreatePost;

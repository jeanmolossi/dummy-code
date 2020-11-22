/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useState } from 'react';
import { FiX } from 'react-icons/fi';
import {
  MainLayout,
  Cam as CamComponent,
  Button,
  ImageBase64,
} from '../../components';
import { Container, CurrentImagesWrapper, ImageWrapper } from './styles';

const CreatePost: React.FC = () => {
  const [images, setImages] = useState<ImageBase64[]>([]);

  const handleCapture = (image: ImageBase64) => {
    //
  };

  const handleAddPhoto = useCallback((image: ImageBase64) => {
    setImages((allImages: ImageBase64[]) => [...allImages, image]);
  }, []);

  const handleRemovePhoto = useCallback((index: number) => {
    setImages((prevStateImages: ImageBase64[]) =>
      prevStateImages.filter((image, currentIndex) => currentIndex !== index),
    );
  }, []);

  return (
    <MainLayout showBottomTabs>
      <Container>
        <h1>Adicionar publicação</h1>

        <CamComponent onCapture={handleCapture} onSaveAction={handleAddPhoto} />

        <CurrentImagesWrapper>
          {images.length > 0 &&
            images.map((image, index) => (
              <ImageWrapper key={index.toString()}>
                <Button
                  size="xs"
                  variant="red"
                  $translucent
                  onClick={() => handleRemovePhoto(index)}
                >
                  <FiX />
                </Button>
                {image && <img src={image} alt="Image" />}
              </ImageWrapper>
            ))}
        </CurrentImagesWrapper>
      </Container>
    </MainLayout>
  );
};

export default CreatePost;

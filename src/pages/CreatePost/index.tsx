/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FiShare, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  MainLayout,
  Cam as CamComponent,
  Button,
  ImageBase64,
  TextArea,
} from '../../components';
import { publishNewPost } from '../../repositories/postRepository';
import { UpdateRequestStatus } from '../../store/modules/app';
import { RootState } from '../../store/modules/rootTypes';
import { Container, CurrentImagesWrapper, ImageWrapper } from './styles';

const CreatePost: React.FC = () => {
  const { authUser } = useSelector((state: RootState) => ({
    authUser: state.user.authUser,
  }));

  const dispatch = useDispatch();

  const [images, setImages] = useState<ImageBase64[]>([]);

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      const { post } = data;

      dispatch(UpdateRequestStatus('PENDING', 'Estamos criando seu post...'));

      //
      const { status } = await publishNewPost({
        userId: authUser.uid,
        images,
        post,
      });

      dispatch(UpdateRequestStatus(status, 'Post adicionado!'));
      reset();
      setImages([]);
    },
    [images, authUser.uid, dispatch],
  );

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

        <CamComponent onSaveAction={handleAddPhoto} />

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

        <Form onSubmit={handleSubmit}>
          <TextArea label="O que você está pensando ?" name="post" required />

          <Button>
            <FiShare /> Publicar
          </Button>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default CreatePost;

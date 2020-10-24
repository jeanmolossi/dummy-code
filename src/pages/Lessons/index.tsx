import React from 'react';
import {
  FiEye,
  FiMessageCircle,
  FiSearch,
  FiPlay,
  FiServer,
} from 'react-icons/fi';
import { MainLayout } from '../../components';
import {
  Container,
  ContainerImageCourse,
  Icon,
  ContainerToVideo,
  ContainerIcons,
  Button,
  InputSearch,
  Modulos,
  CardLesson,
  HeaderCard,
  ContentCard,
  PlayerCard,
  ButtonLesson,
  ModulosWrapper,
  TextInfoModulos,
} from './styles';

const Lessons: React.FC = () => {
  return (
    <MainLayout>
      <Container>
        <ContainerImageCourse img="http://localhost:3000/files/image5.jpg">
          <ContainerToVideo>
            <Button variant="yellow" size="sm">
              Continuar..
            </Button>
            <strong>
              Context API <br /> Rotas & Autenticação{' '}
            </strong>
          </ContainerToVideo>
          <ContainerIcons>
            <Icon>
              <FiEye />
              <span>2529</span>
            </Icon>
            <Icon>
              <FiMessageCircle />
              <span>47</span>
            </Icon>
          </ContainerIcons>
        </ContainerImageCourse>
        <InputSearch>
          <FiSearch />
          <input placeholder="Busque o conteudo" />
        </InputSearch>
        <TextInfoModulos>Modulos</TextInfoModulos>

        <ModulosWrapper>
          <Modulos>
            <CardLesson>
              <HeaderCard>
                <FiServer />
                <h3>NodeJS</h3>
              </HeaderCard>
              <ContentCard>
                <p>Backend</p>
                <h5>7 aulas</h5>
              </ContentCard>
              <PlayerCard>
                <ButtonLesson variant="transparent">
                  <FiPlay color="#3DD598" />
                </ButtonLesson>
                <p>Abrir</p>
              </PlayerCard>
            </CardLesson>
          </Modulos>
          <Modulos>
            <CardLesson>
              <HeaderCard>
                <FiServer />
                <h3>NodeJS</h3>
              </HeaderCard>
              <ContentCard>
                <p>Backend</p>
                <h5>7 aulas</h5>
              </ContentCard>
              <PlayerCard>
                <ButtonLesson variant="transparent">
                  <FiPlay color="#3DD598" />
                </ButtonLesson>
                <p>Abrir</p>
              </PlayerCard>
            </CardLesson>
          </Modulos>
        </ModulosWrapper>
      </Container>
    </MainLayout>
  );
};

export default Lessons;

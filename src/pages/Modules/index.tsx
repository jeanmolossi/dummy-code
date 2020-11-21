import React, { useEffect, useState } from 'react';
import {
  FiEye,
  FiMessageCircle,
  FiSearch,
  FiPlay,
  FiVideo,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components';
import api from '../../services/api';
import {
  Container,
  ContainerImageCourse,
  Icon,
  ContainerToVideo,
  ContainerIcons,
  Button,
  InputSearch,
  CardLesson,
  HeaderCard,
  ContentCard,
  PlayerCard,
  ButtonLesson,
  ModulosWrapper,
  TextInfoModulos,
  Variants,
} from './styles';

interface ApiModulesResponse {
  id: number;
  class: string;
  typeConcepts: string;
  totalClass: number;
  colorCard: Variants;
}

const Lessons = () => {
  const [modules, setModules] = useState<ApiModulesResponse[]>([]);

  useEffect(() => {
    api.get<ApiModulesResponse[]>(`/modules`).then(response => {
      setModules(response.data);
    });
  }, []);

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
          {modules.map(module => (
            <CardLesson key={module.id} variant={module.colorCard}>
              <HeaderCard>
                <FiVideo />
                <h3>{module.class}</h3>
              </HeaderCard>
              <ContentCard>
                <p>{module.typeConcepts}</p>
                <h5>{module.totalClass} aulas</h5>
              </ContentCard>
              <PlayerCard>
                <ButtonLesson as={Link} to={`/module/${module.id}`} variant="transparent">
                  <FiPlay
                    color={
                      module.colorCard !== 'yellow'
                        ? module.colorCard
                        : '#625B39'
                    }
                  />
                </ButtonLesson>
                <p>Abrir</p>
              </PlayerCard>
            </CardLesson>
          ))}
        </ModulosWrapper>
      </Container>
    </MainLayout>
  );
};

export default Lessons;

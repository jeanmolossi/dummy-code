import React, { useEffect, useRef, useState } from 'react';
import { MotionValue, useElementScroll, useTransform } from 'framer-motion';
import { FiSearch, FiMessageCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { MainLayout } from '../../../components';
import api from '../../../services/api';
import {
  Container,
  InputSearch,
  ModuleImage,
  ModuleWrapper,
  ModuloInfo,
  Messages,
  CardModules,
  HeaderTitleAndInput,
} from './styles';

interface ApiModuleResponse {
  module: Array<{
    id: string;
    name: string;
    img: string;
    messages: number;
  }>;
}

const Module: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();

  const moduleElementRef = useRef<HTMLDivElement>(null);

  const [module, setModule] = useState<ApiModuleResponse['module']>([]);
  useEffect(() => {
    api.get<ApiModuleResponse>(`/modules/${moduleId}`).then(response => {
      setModule(response.data.module);
    });
  }, [moduleId]);

  const { scrollXProgress } = useElementScroll(moduleElementRef);
  const currentIndex = useTransform(
    scrollXProgress,
    [0, 1],
    [0, module.length - 1],
  );

  return (
    <MainLayout>
      <Container>
        <HeaderTitleAndInput>
          <InputSearch>
            <FiSearch />
            <input placeholder="Busque o conteúdo" />
          </InputSearch>
          <h1>ReactJS</h1>
        </HeaderTitleAndInput>
        <ModuleWrapper ref={moduleElementRef}>
          {module.map((mod, index) => (
            <CardModule
              key={index.toString()}
              {...{ mod, index, currentIndex }}
            />
          ))}
        </ModuleWrapper>
      </Container>
    </MainLayout>
  );
};

interface CardModuleProp {
  mod: ApiModuleResponse['module'][0];
  currentIndex: MotionValue<number>;
  index: number;
}

const CardModule = ({ mod, currentIndex, index }: CardModuleProp) => {
  const scale = useTransform(
    currentIndex,
    [index - 1, index, index + 1],
    [0.7, 1.0, 0.7],
    { clamp: true },
  );
  return (
    <CardModules style={{ scale }} key={mod.id}>
      <ModuleImage img={mod.img}>
        <Messages>
          <FiMessageCircle />
          <p>{mod.messages}</p>
        </Messages>
        <ModuloInfo>
          <p>{mod.name}</p>
        </ModuloInfo>
      </ModuleImage>
    </CardModules>
  );
};

export default Module;

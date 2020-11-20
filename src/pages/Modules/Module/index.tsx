import React from 'react';
import { FiSearch, FiEye, FiMessageCircle } from 'react-icons/fi';
import { MainLayout } from '../../../components';
import {
  Container,
  InputSearch,
  ModulosImages,
  ModulosWrapper,
  ModuloInfo,
  ViewAndMessages,
  CardModules,
} from './styles';

const Module: React.FC = () => {
  return (
    <MainLayout>
      <Container>
        <InputSearch>
          <FiSearch />
          <input placeholder="Busque o conteudo" />
        </InputSearch>
        <h1>ReactJS</h1>
        <ModulosWrapper>
          <CardModules initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ModulosImages img="http://localhost:3000/files/image5.jpg">
              <ViewAndMessages>
                <div>
                  <FiEye />
                  <p>297</p>
                </div>
                <div>
                  <FiMessageCircle />
                  <p>Messages</p>
                </div>
              </ViewAndMessages>

              <ModuloInfo>
                <p>Context API</p>
                <p>Rotas & Autenticação</p>
              </ModuloInfo>
            </ModulosImages>
          </CardModules>
          <CardModules initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ModulosImages img="http://localhost:3000/files/image5.jpg">
              <ViewAndMessages>
                <div>
                  <FiEye />
                  <p>297</p>
                </div>
                <div>
                  <FiMessageCircle />
                  <p>Messages</p>
                </div>
              </ViewAndMessages>

              <ModuloInfo>
                <p>Context API</p>
                <p>Rotas & Autenticação</p>
              </ModuloInfo>
            </ModulosImages>
          </CardModules>
          <CardModules initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ModulosImages img="http://localhost:3000/files/image5.jpg">
              <ViewAndMessages>
                <div>
                  <FiEye />
                  <p>297</p>
                </div>
                <div>
                  <FiMessageCircle />
                  <p>Messages</p>
                </div>
              </ViewAndMessages>

              <ModuloInfo>
                <p>Context API</p>
                <p>Rotas & Autenticação</p>
              </ModuloInfo>
            </ModulosImages>
          </CardModules>
        </ModulosWrapper>
      </Container>
    </MainLayout>
  );
};

export default Module;

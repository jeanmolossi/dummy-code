import React from 'react';
import { Form } from '@unform/web';
import { FaTwitch } from 'react-icons/fa';
import {
  FiUser,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiGithub,
  FiEdit,
} from 'react-icons/fi';
import { Input, MainLayout, TextArea } from '../../../components';
import {
  Container,
  WrapperEditProfile,
  ButtonSubmitEditProfile,
} from './styles';

const EditProfile: React.FC = () => {
  return (
    <MainLayout showBottomTabs>
      <Container>
        <WrapperEditProfile>
          <h1>Edite Seu Perfil</h1>
          <Form
            onSubmit={() => {
              //
            }}
          >
            <Input name="nome" icon={FiUser} placeholder="Digite seu Nome" />

            <Input
              name="linkedin"
              icon={FiLinkedin}
              placeholder="Digite seu Linkedin"
            />

            <Input
              name="instagram"
              icon={FiInstagram}
              placeholder="Digite seu Instagram"
            />

            <Input
              name="youtube"
              icon={FiYoutube}
              placeholder="Digite seu Youtube"
            />

            <Input
              name="github"
              icon={FiGithub}
              placeholder="Digite seu Github"
            />

            <Input
              name="twitch"
              icon={FaTwitch}
              placeholder="Digite seu Twitch"
            />

            <TextArea
              label="Biografia"
              name="biograph"
              placeholder="Biografia"
            />

            <ButtonSubmitEditProfile>
              <FiEdit />
              Salvar
            </ButtonSubmitEditProfile>
          </Form>
        </WrapperEditProfile>
      </Container>
    </MainLayout>
  );
};

export default EditProfile;

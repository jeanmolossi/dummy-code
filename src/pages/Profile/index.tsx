import React from 'react';
import { FaTwitch } from 'react-icons/fa';
import {
  FiAward,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiSend,
  FiYoutube,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components';
import {
  HeroUser,
  Avatar,
  UserActivity,
  UserSocial,
  Socials,
  Points,
  UserBio,
} from './styles';

const Profile: React.FC = () => {
  return (
    <MainLayout>
      <HeroUser>
        <Avatar>
          <img
            src="http://192.168.0.104:3000/files/image2.jpg"
            alt="User Avatar"
          />
          <h1>Nome</h1>
        </Avatar>
      </HeroUser>

      <UserActivity>
        <div>
          1.3k
          <small>Atividades</small>
        </div>

        <div>
          835
          <small>Favoritos</small>
        </div>

        <div>
          37.4k
          <small>Curtidas</small>
        </div>
      </UserActivity>

      <UserSocial>
        <Socials>
          <Link to="/" className="instagram">
            <FiInstagram />
          </Link>
          <Link to="/" className="linkedin">
            <FiLinkedin />
          </Link>
          <Link to="/" className="telegram">
            <FiSend />
          </Link>
          <Link to="/" className="youtube">
            <FiYoutube />
          </Link>
          <Link to="/" className="github">
            <FiGithub />
          </Link>
          <Link to="/" className="twitch">
            <FaTwitch />
          </Link>
        </Socials>
        <Points>
          <FiAward />
          <small>12 pontos</small>
        </Points>
      </UserSocial>

      <UserBio>
        Estamos enfrentando um sério dilema de negócios, com o Facebook tirando
        uma boa parte do tráfego para sites de notícias e conteúdo, e os
        bloqueadores de anúncios consumindo o que sobrou dele enquanto cortam as
        receitas de publicidade.
      </UserBio>
    </MainLayout>
  );
};

export default Profile;

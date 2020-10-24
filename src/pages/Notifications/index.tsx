import React, { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components';
import api from '../../services/api';
import Notification from './Notification';
import { Container, Header, NotificationsList } from './styles';

export interface ApiNotificationsResponse {
  id: string;
  from: {
    name: string;
    avatar: string;
  };
  to: string;
  read: boolean;
  description: string;
  created_at: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState(
    [] as ApiNotificationsResponse[],
  );

  useEffect(() => {
    api.get<ApiNotificationsResponse[]>(`notifications`).then(response => {
      setNotifications(response.data);
    });
  }, []);

  return (
    <MainLayout>
      <Container>
        <Header>
          <Link to="/home">
            <FiChevronLeft /> Voltar
          </Link>
        </Header>

        <NotificationsList>
          {notifications.map((notification, index) => (
            <Notification
              key={notification.id}
              index={index}
              {...notification}
            />
          ))}
        </NotificationsList>
      </Container>
    </MainLayout>
  );
};

export default Notifications;

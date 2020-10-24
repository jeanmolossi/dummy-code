import React, { useMemo } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Button } from '../../../components';
import { ApiNotificationsResponse } from '../index';
import { Container, UserAvatar, Content, More } from './styles';

type NotificationProps = ApiNotificationsResponse;

const Notification = ({
  from,
  description,
  created_at,
  read,
}: NotificationProps) => {
  const wasCreated = useMemo(() => {
    const parsedDate = parseISO(created_at);
    const distanceFormatted = formatDistance(parsedDate, new Date(), {
      addSuffix: true,
      locale: ptBR,
    });

    return distanceFormatted;
  }, [created_at]);

  return (
    <Container read={read}>
      <UserAvatar>
        <img src={from.avatar} alt="User avatar" />
      </UserAvatar>
      <Content>
        <span>{from.name}</span>
        <small>{description}</small>
        <small>{wasCreated}</small>
      </Content>
      <More>
        <Button>..</Button>
      </More>
    </Container>
  );
};

export default Notification;

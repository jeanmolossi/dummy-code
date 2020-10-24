import React, { useMemo } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Transition, Variants } from 'framer-motion';
import { Button } from '../../../components';
import { ApiNotificationsResponse } from '../index';
import { Container, UserAvatar, Content, More } from './styles';

type NotificationProps = ApiNotificationsResponse & {
  index: number;
};

const variants: Variants = {
  in: i => ({ x: '0', transition: { delay: i * 0.3 } }),
  out: { x: '-100%' },
};

const transition: Transition = {
  type: 'spring',
  bounce: 0.15,
  damping: 20,
};

const Notification = ({
  from,
  description,
  created_at,
  read,
  index,
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
    <Container
      read={read}
      initial="out"
      animate="in"
      variants={variants}
      transition={transition}
      custom={index}
    >
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

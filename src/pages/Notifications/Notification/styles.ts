import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ContainerProps {
  read: boolean;
}

export const Container = styled(motion.div)<ContainerProps>`
  padding: var(--padding-md);
  display: flex;
  align-items: center;

  opacity: ${({ read }) => (read ? 0.6 : 1)};
`;

export const UserAvatar = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: var(--radii-full);
  background-color: var(--green-100);
  display: flex;
  place-content: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: var(--padding-sm);
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--padding-sm);

  > span {
    font-size: var(--size-md);
    font-weight: bold;
  }

  > small {
    font-size: var(--size-md);
  }
`;

export const More = styled.div`
  width: 6rem;
`;

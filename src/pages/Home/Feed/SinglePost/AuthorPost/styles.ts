import styled from 'styled-components';

interface AvatarProps {
  variant?: 'red' | 'green' | 'yellow' | 'purple';
}

export const Container = styled.div`
  display: flex;
`;

export const Avatar = styled.div<AvatarProps>`
  --background-color: var(--red-100);
  ${({ variant }) => variant && `--background-color: var(--${variant}-100);`}

  width: var(--padding-xl1);
  height: var(--padding-xl1);
  border-radius: var(--radii-full);
  background-color: var(--background-color);
  display: flex;
  place-content: center;
  place-items: center;

  > img {
    width: var(--padding-lg);
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  flex: 1;
  padding: 0 var(--padding-md);
  row-gap: var(--spacing-xs);

  > h5 {
    color: var(--grey-100);
  }
`;

export const MoreOptions = styled.button`
  display: flex;
  align-items: center;
  height: initial;
  background: transparent;
  border: 0;
  color: var(--grey-100);
`;

export const ButtonsContainer = styled.div`
  margin-top: var(--spacing-md);
  display: flex;
  flex-direction: column;
`;

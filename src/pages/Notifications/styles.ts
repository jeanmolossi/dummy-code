import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-image: var(--dark-100);
`;

export const Header = styled.div`
  display: block;
  padding: var(--padding-md);

  > a {
    color: var(--grey-100);
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--size-md);
  }
`;

export const NotificationsList = styled.div``;

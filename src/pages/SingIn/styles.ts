import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: var(--padding-md);
  row-gap: var(--spacing-lg);
`;

export const Logo = styled.div`
  display: block;
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  background-color: var(--red-100);
  border-radius: var(--radii-sm);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

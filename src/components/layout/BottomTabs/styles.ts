import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 9.6rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-300);
  padding: var(--padding-md);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top-left-radius: var(--radii-lg);
  border-top-right-radius: var(--radii-lg);
  box-shadow: 0 0.4rem 1.6rem var(--dark-background);
`;

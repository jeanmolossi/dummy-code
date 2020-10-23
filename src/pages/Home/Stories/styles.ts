import styled from 'styled-components';

export const HorizontalScrollView = styled.div`
  display: flex;
  flex-shrink: 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  column-gap: 1.6rem;
  padding: var(--padding-xs) 0;
  height: 21.6rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-image: var(--dark-100);
    border-radius: var(--radii-md);
  }
`;

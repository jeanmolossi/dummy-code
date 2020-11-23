import styled from 'styled-components';

export const Container = styled.div`
  > p {
    margin: var(--spacing-md) 0;
    line-height: var(--spacing-lg);
  }
`;

export const Images = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: var(--spacing-md);
  overflow-x: auto;
  margin: var(--spacing-md) 0;

  scroll-snap-type: x mandatory;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  border-radius: var(--radii-md);
  overflow: hidden;
  height: 20.8rem;

  scroll-snap-align: start;

  > img {
    object-fit: cover;
    height: 100%;
  }
`;

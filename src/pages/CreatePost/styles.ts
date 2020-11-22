import styled from 'styled-components';
import { Button } from '../../components';

export const Container = styled.div`
  padding: var(--padding-md);
  padding-bottom: 10.8rem;

  > h1 {
    margin-bottom: var(--spacing-md);
  }
`;

export const CurrentImagesWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  gap: var(--spacing-lg);

  scroll-snap-type: x mandatory;
`;

export const ImageWrapper = styled.div`
  scroll-snap-align: start;
  position: relative;

  > ${Button} {
    position: absolute;
    top: var(--spacing-sm);
    right: var(--spacing-sm);
  }

  > img {
    width: var(--size-xl7);
  }
`;

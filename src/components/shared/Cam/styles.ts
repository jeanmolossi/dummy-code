import styled from 'styled-components';

interface ContainerProps {
  aspectRatio: number;
}

export const Container = styled.div<ContainerProps>`
  --aspect-ratio: ${({ aspectRatio }) => aspectRatio};

  position: relative;

  width: calc(100vw - var(--padding-md) * 2);
  height: calc((100vw - var(--padding-md) * 2) / (var(--aspect-ratio)));
  margin-bottom: var(--spacing-xl2);

  > video {
    box-shadow: 0 4px 16px var(--grey-300);
    border-radius: var(--radii-md);
    overflow: hidden;
    transition: all 0.3s;
    width: 100%;
    height: 100%;
  }
`;

export const PreviewContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99999;

  > img {
    z-index: 2;
    transform: rotateY(180deg);

    border-radius: var(--radii-md);
    overflow: hidden;
  }
`;

export const ActionButtons = styled.div`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  z-index: 3;

  display: flex;
  flex-direction: column;
  gap: var(--spacing--md);
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-md);
`;

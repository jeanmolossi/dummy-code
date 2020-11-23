import styled from 'styled-components';

interface ContainerProps {
  aspectRatio: number;
  $camIsOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  --aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  --height: ${({ $camIsOpen = false }) =>
    $camIsOpen
      ? 'calc((100vw - var(--padding-md) * 2) / (var(--aspect-ratio)))'
      : 0}

  --device-container-width: calc(100vw - var(--padding-md) * 2);

  transition: all 0.3s;
  width: var(--device-container-width);
  height: --height;
  margin-bottom: var(--spacing-xl2);
`;

export const CamContainer = styled.div`
  --cam-container-width: calc(20.8rem - var(--padding-md) * 2);

  background-color: #333;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--cam-container-width);
  height: calc(var(--cam-container-width) / var(--aspect-ratio));
  overflow: hidden;
  border-radius: var(--radii-md);
  margin: 0 auto;

  > video {
    height: calc(var(--cam-container-width) / var(--aspect-ratio));
  }
`;

export const PreviewContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: var(--cam-container-width);
  z-index: 99999;

  > img {
    z-index: 2;
    transform: rotateY(180deg);

    border-radius: var(--radii-md);
    overflow: hidden;
    object-fit: cover;
    object-position: center;
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

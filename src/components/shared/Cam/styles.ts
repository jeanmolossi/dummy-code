import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  position: relative;

  width: calc(100vw - var(--padding-md) * 2);
  height: calc((100vw - var(--padding-md) * 2) * 1.625);

  background: #fff;

  > video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;

  > ${Button} {
  }
`;

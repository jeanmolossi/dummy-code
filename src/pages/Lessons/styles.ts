import styled from 'styled-components';
import { Button as BtnComponent } from '../../components';

interface ImageProps {
  img: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: var(--padding-xl);
  background-image: var(--dark-100);
`;

export const ContainerImageCourse = styled.div<ImageProps>`
  display: flex;
  flex-direction: column;
  padding: var(--padding-sm);
  height: 200px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
  url(${props => props.img})  no-repeat;
  background-size: 100% 100%;
  border-radius: var(--spacing-md);
  }
`;

export const ContainerToVideo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;

  strong::after {
    display: flex;
    content: '';
    opacity: 0.4;
    width: 100%;
    height: 1.8px;
    margin-top: var(--spacing-md);
    background: var(--grey-100);
  }
`;

export const Button = styled(BtnComponent)`
  align-self: flex-start;
`;

export const ContainerIcons = styled.div`
  margin-top: var(--spacing-md);
  display: flex;
  align-items: center;
  > div {
    margin-right: var(--spacing-md);
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: var(--spacing-xs);
  }
`;

export const InputSearch = styled.div`
  border: 0;
  height: var(--radii-xl1);
  margin-top: var(--radii-lg);
  border-radius: var(--radii-xl);
  padding: var(--padding-md);
  background: var(--grey-100);

  input {
    padding-left: var(--padding-md);
    border: 0;
    background: transparent;
    color: var(--grey-300);

    &::placeholder {
      color: #ffffff;
    }
  }
`;

export const TextInfoModulos = styled.h1`
  font-size: var(--radii-xxl);
  margin-top: var(--radii-xl);
`;

export const ModulosWrapper = styled.div`
  display: flex;
  > div {
    margin-right: 12px;
  }
`;

export const Modulos = styled.div`
  margin-top: var(--radii-xl);
`;

export const CardLesson = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--padding-md);
  border-radius: var(--radii-lg);
  background-color: var(--green-200);
  width: 150px;
  height: 210px;
`;

export const ButtonLesson = styled(Button)`
  border: 0;
  background: white;
  border-radius: 50%;
`;
export const HeaderCard = styled.div`
  display: flex;
  align-items: center;

  > h3 {
    margin-left: var(--spacing-xs);
  }
`;
export const ContentCard = styled.div`
  > p {
    font-weight: bold;
    margin-bottom: var(--spacing-sm);
  }
`;
export const PlayerCard = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-left: var(--spacing-sm);
  }
`;

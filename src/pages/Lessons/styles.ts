import styled, { css } from 'styled-components';
import { Button as BtnComponent } from '../../components';

interface ImageProps {
  img: string;
}
export type Variants = 'red' | 'green' | 'transparent' | 'blue' | 'yellow';

interface CardProps {
  variant?: Variants;
}

const cardVariants = {
  red: css`
    background-color: var(--red-100);
    --box-shadow-color: var(--red-300);
  `,
  green: css`
    background-color: var(--green-100);
    --box-shadow-color: var(--green-300);
  `,
  transparent: css`
    background-color: transparent;
    box-shadow: none;
  `,
  yellow: css`
    background-color: var(--yellow-100);
    --box-shadow-color: var(--yellow-300);
    color: #fff;
  `,
  blue: css`
    background-color: var(--blue-100);
    --box-shadow-color: var(--blue-300);
    color: #fff;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--padding-xl);
  background-image: var(--dark-100);
`;

export const ContainerImageCourse = styled.div<ImageProps>`
  display: flex;
  flex-direction: column;
  padding: var(--padding-sm);
  height: 20rem;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
  url(${props => props.img})  no-repeat;
  background-size: cover;
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
    height: 0.18rem;
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
  flex-wrap: nowrap;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  > div {
    margin-right: var(--spacing-md);
  }
`;

export const CardLesson = styled.div<CardProps>`
  margin-top: var(--radii-xl);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-shrink: 0;
  padding: var(--padding-md);
  border-radius: var(--radii-lg);
  ${({ variant }) => cardVariants[variant || 'green']};
  width: 15rem;
  height: 21rem;
`;

export const ButtonLesson = styled(Button)`
  border: 0;
  background: white;
  border-radius: var(--radii-full);
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

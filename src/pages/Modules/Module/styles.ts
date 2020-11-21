import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ImageProps {
  img: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: var(--dark-100);

  > h1 {
    margin-top: var(--spacing-xl);
    font-size: var(--radii-xl1);
  }
`;

export const InputSearch = styled.div`
 
  border: 0;
  height: var(--radii-xl1);
  margin-top: var(--radii-lg);
  border-radius: var(--radii-xl);
  padding: var(--padding-md);
  background: var(--grey-100);

  + h1 {
    margin-top: var(--padding-md);
  }
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

export const HeaderTitleAndInput = styled.div`
  padding:var(--padding-md);
`;
export const ModuleWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-image: var(--dark-100);
    border-radius: var(--radii-md);
  }
`;
export const CardModules = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  &:last-child {
    margin-right: var(--spacing-xl1);
  }

`;
export const ModuleImage = styled.div<ImageProps>`
  margin-top: var(--spacing-xl1);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content:space-between;
  padding: var(--padding-lg);
  height: 40.8rem;
  width:25rem;
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

export const Messages = styled.div`
    display: flex;
    > p {
      font-weight: bold;
      margin-left: var(--spacing-sm);
    }
`;
export const ModuloInfo = styled.div`
  p {
    font-weight: bold;
  }
`;

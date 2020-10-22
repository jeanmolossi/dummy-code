import styled, { css } from 'styled-components';

type Variants = 'red' | 'green' | 'transparent' | 'yellow';

interface ButtonProps {
  variant?: Variants;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  translucent?: boolean;
}

const buttonVariants = {
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
    color: var(--dark-background);
  `,
};

const buttonSizes = {
  xs: css`
    font-size: 1.2rem;
    padding: var(--padding-sm);
    border-radius: var(--radii-sm);
  `,
  sm: css`
    font-size: 1.4rem;
    padding: var(--padding-sm);
    border-radius: var(--radii-sm);
  `,
  md: css`
    font-size: 1.6rem;
    padding: var(--padding-md);
    border-radius: var(--radii-md);
  `,
  lg: css`
    font-size: 2.4rem;
    padding: var(--padding-lg);
    border-radius: var(--radii-lg);
  `,
  xl: css`
    font-size: 3.2rem;
    padding: var(--padding-xl);
    border-radius: var(--radii-xl);
  `,
};

const buttonTranslucent = {
  red: css`
    background-color: var(--red-300);
    --box-shadow-color: var(--red-300);
  `,
  green: css`
    background-color: var(--green-300);
    --box-shadow-color: var(--green-300);
  `,
  transparent: css`
    background-color: transparent;
    box-shadow: none;
  `,
  yellow: css`
    background-color: var(--yellow-300);
    --box-shadow-color: var(--yellow-300);
    color: #fff;
  `,
};

export default styled.button<ButtonProps>`
  --box-shadow-color: #000;
  --button-box-shadow: 0 0.2rem 0.4rem var(--box-shadow-color);

  border: 0;
  margin: var(--spacing-sm) 0;
  box-shadow: var(--button-box-shadow);
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: var(--padding-sm);

  ${({ variant }) => buttonVariants[variant || 'green']};
  ${({ size }) => buttonSizes[size || 'md']};
  ${({ translucent, variant }) =>
    translucent && buttonTranslucent[variant || 'green']}
`;

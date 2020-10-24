import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--grey-300);
  border-radius: var(--radii-lg);
  padding: var(--padding-md);

  > p {
    margin-top: var(--spacing-md);
    line-height: var(--size-lg);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--size-md);

  > span {
    font-weight: bold;
  }
`;

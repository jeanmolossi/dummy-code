import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 0 var(--spacing-md);
    padding: var(--padding-sm) 0;
    border-top: 0.1rem solid var(--grey-200);
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--spacing-md);
  color: var(--grey-100);
`;

export const Likes = styled(Comments)``;

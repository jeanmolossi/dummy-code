import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    flex: 1;
    padding: var(--padding-sm);
    background: none;
    border: 0;
    color: #fff;
  }

  & + div {
    margin-top: var(--spacing-md);
  }
`;

export const BioGraph = styled.textarea`
  width: 100%;
  padding: var(--padding-md);

  margin-top: var(--spacing-md);
  background-color: var(--grey-300);
  resize: vertical;
  outline: 0;
  color: white;
  border-radius: var(--radii-sm);
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

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
  width: 20rem;
  height: 20rem;
  margin-top: var(--spacing-md);
  background-color: var(--grey-300);
  resize: none;
  outline: 0;
  color: white;
`;

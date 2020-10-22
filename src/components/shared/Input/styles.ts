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

export const IconBox = styled.div``;

export const ToggleButton = styled.button.attrs({ type: 'button' })`
  background: transparent;
  border: 0;
  color: var(--grey-100);
`;

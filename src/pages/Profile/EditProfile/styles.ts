import styled from 'styled-components';
import { Button } from '../../../components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: var(--padding-xl1);
  background-color: var(--grey-300);
  align-items: center;
  flex-direction: column;
`;

export const WrapperEditProfile = styled.div`
  h1 {
    margin-bottom: var(--spacing-xl1);
  }
`;

export const ButtonSubmitEditProfile = styled(Button)`
  width: 20rem;
  margin-top: var(--spacing-xl1);
  justify-content: center;
  align-items: center;
`;

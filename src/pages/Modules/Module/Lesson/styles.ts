import styled from 'styled-components';

export const Container = styled.div`
  padding: var(--padding-md);
  padding-bottom: 10.8rem;
`;

export const VideoContainer = styled.div`
  > video {
    width: 100%;
  }
`;

export const LessonControls = styled.div`
  display: flex;
  gap: var(--spacing-md);
  justify-content: space-between;

  > div {
    flex: 1;
  }
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  > span {
    display: flex;
    gap: var(--spacing-sm);
    font-size: var(--size-md);
  }
`;

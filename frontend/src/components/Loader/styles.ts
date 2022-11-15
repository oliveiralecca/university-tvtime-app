import styled from 'styled-components';

export const Container = styled.div<{ center?: boolean }>`
  height: 100%;

  display: flex;
  align-items: center;

  justify-content: ${(center) => center ? 'center' : undefined}
`;

import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;

  section:first-child {
    flex: 0 100px;
  }
  section:last-child {
    flex: 1;
  }

  &.form {
    align-items: center;
  }
`;

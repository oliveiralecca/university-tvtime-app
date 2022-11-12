import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;

  height: calc(100% - 60px);

  main {
    flex: 1;
    gap: 30px;

    display: flex;
    flex-direction: column;
  }
`;

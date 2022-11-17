import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    height: 80%;
  }

  a:nth-child(2) {
    display: none;
  }
`;

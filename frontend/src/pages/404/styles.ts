import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
  gap: 15px;

  a:nth-child(2) {
    display: none;
  }
`;

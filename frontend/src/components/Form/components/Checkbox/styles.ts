import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  label {
    display: block;
  }
`;

export const ChecksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 16px;

  input {
    margin-right: 5px;
  }
`;

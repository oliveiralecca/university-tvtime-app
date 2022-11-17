import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  span {
    color: red;
    font-size: 11px;
  }
`;

export const Preview = styled.div`
  img {
    border-radius: 8px;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 30px;
  margin-top: 5px;

  border-radius: 8px;
  outline: none;
  box-sizing: border-box;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

import styled from "styled-components";

export const Container = styled.div``;

export const Textarea = styled.textarea`
  display: flex;
  flex-direction: column;

  width: 400px;
  resize: none;
  margin-top: 5px;

  border-radius: 8px;
  outline: none;
  border: 2px solid #fe673780;

  padding: 10px;
  box-sizing: border-box;

  color: #3f3e6d;
  font-family: "Poppins", sans-serif;
  font-size: 16px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &:focus {
    border-color: #fe6737;
  }
`;

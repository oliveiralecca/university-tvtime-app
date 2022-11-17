import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  span {
    color: red;
    font-size: 11px;
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
    margin-bottom: 10px;
  }

  &[type="text"] {
    padding: 10px;
    border: 2px solid #fe673780;

    color: #3f3e6d;
    font-family: "Poppins", sans-serif;
    font-size: 16px;

    &:focus {
      border-color: #fe6737;
    }
  }

  &[type="time"],
  &[type="date"] {
    display: flex;
    flex-direction: row;

    width: 100%;
    padding: 10px;

    border: 2px solid #fe673780;

    color: #3f3e6d;
    font-family: "Poppins", sans-serif;
    font-size: 16px;

    &:focus {
      border-color: #fe6737;
    }
  }
`;

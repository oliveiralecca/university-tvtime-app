import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;

  gap: 10px;

  background: none;
  border: none;

  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }

  &:hover {
    color: #fe6737;
    cursor: pointer;

    svg {
      fill: #fe6737;
    }
  }
`;

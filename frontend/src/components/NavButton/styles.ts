import { Link } from "react-router-dom";
import styled from "styled-components";

type ButtonStyledProps = {
  $hasPath: boolean;
  $unclickableButton?: boolean;
}

export const StyledButton = styled(Link)<ButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: fit-content;

  border: 2px solid #3f3e6d;
  border-radius: 23px;

  cursor: ${({ $hasPath }) => ($hasPath ? "pointer" : "default")};

  svg {
    width: 40px;
    height: 40px;
  }

  ${({ $hasPath }) =>
    $hasPath &&
    `
    &:hover {
      background-color: #fe673780;
  
      svg {
        path {
          fill: #ffffff80;
        }
      }
    }
  `}

  ${({ $unclickableButton }) =>
    $unclickableButton &&
    `
      background-color: #fe6737;
  
      svg {
        path {
          fill: #ffffff;
        }
      }
  `}

  &.active {
    background-color: #fe6737;

    svg {
      path {
        fill: #ffffff;
      }
    }
  }
`;

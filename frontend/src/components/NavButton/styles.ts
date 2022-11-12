import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)<{ path: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: fit-content;

  border: 2px solid #3f3e6d;
  border-radius: 23px;

  cursor: ${({ path }) => path ? 'pointer' : 'default'};

  svg {
    width: 40px;
    height: 40px;
  }

  ${({ path }) => path && `
    &:hover {
      background-color: #fe673780;
  
      svg {
        path {
          fill: #ffffff80;
        }
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

import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #fff;

  gap: 10px;

  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }

  &:hover {
    color: #fe6737;

    svg {
      fill: #fe6737;
    }
  }
`;

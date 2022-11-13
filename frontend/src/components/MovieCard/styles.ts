import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  color: #fff;
  background: #2f2d52;

  border-radius: 30px;
  height: 320px;
  width: 220px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 30px;
  margin: -10px;

  &:hover {
    filter: drop-shadow(5px 5px 20px #f36737);
  }
`;

export const Name = styled.div`
  width: 100%;
  border-radius: 0 0 30px 30px;

  position: absolute;
  bottom: 0;

  background: rgba(47, 45, 82, 85%);

  p {
    font-size: 14px;
    padding: 25px;
  }
`;

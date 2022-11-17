import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  color: #fff;
  background-color: #d0d0d0;


  border-radius: 30px;
  height: 320px;
  width: 220px;

  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 60px;
  }
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
  min-height: 92px;
  border-radius: 0 0 30px 30px;

  position: absolute;
  bottom: 0;

  background: rgba(47, 45, 82, 85%);

  p {
    font-size: 14px;
    padding: 25px;
  }
`;

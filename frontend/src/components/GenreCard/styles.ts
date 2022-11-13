import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
  background: #2f2d52;

  border-radius: 58px;
  padding: 10px;
  height: 100px;
  width: 65px;
  gap: 15px;

  &:hover {
    background-color: #fe6737;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  background-color: none;
  border: 10px;

  text-align: center;
  width: 30px;
  height: 30px;
`;

export const Name = styled.p`
  font-size: 11px;
`;

import styled from "styled-components";

export const Container = styled.aside`
  padding: 30px 10px;
  margin: -30px 0 -30px -30px;
  z-index: 10;

  width: 70px;
  height: 100%;
  position: fixed;

  background: #211f41;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;

    fill: #fff;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  margin-top: 30px;
`;

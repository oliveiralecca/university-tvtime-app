import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 60px;
  width: 300px;

  border-radius: 13px;
  padding: 10px;

  background: #2f2d52;
`;

export const Title = styled.div`
  border-right: 2px solid #3f3e6d;
  height: 100%;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Actions = styled.div`
  width: 20px;

  display: flex;
  flex-direction: column;
  padding-left: 5px;
  gap: 7px;

  svg {
    width: 16px;
    height: 16px;
  }

  div:first-child {
    svg {
      fill: #fff;
    }
  }

  div:last-child {
    svg {
      fill: red;
    }
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  padding: 5px;
  border-radius: 8px;

  &:hover {
    background: #fe673780;
    cursor: pointer;
  }
`;

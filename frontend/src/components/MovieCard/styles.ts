import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  padding: 10px;
  margin-bottom: 16px;
  gap: 20px;

  border: 1px dotted #8257E6;
`;

export const Item = styled.div`
  p {
    margin-left: 15px;
    color: #42D3FF;
    font-size: 14px;
  }

  span {
    display: flex;
    align-items: flex-start;
    
    gap: 6px;
    font-size: 18px;
    margin-bottom: 4px;
  }

  span::before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 8px 8px;
    border-color: transparent transparent #42D3FF transparent;
  }
`;

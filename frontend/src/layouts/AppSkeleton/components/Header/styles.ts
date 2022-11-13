import styled from "styled-components";

export const Container = styled.header`
  flex: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Separator = styled.div`
  border-left: 2px solid #2F2D52; 
  height: 40px;
`;

export const ProfilePhoto = styled.img`
  height: 30px;
  width: 30px;
  padding: 10px;

  border-radius: 20px;

  background-color: #fe6737;
`;

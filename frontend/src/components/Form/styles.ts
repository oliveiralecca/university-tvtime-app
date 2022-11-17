import styled from "styled-components";
import { Form } from "@unform/web";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;
  gap: 15px;
`;

export const Time = styled.div`
  display: flex;
  gap: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 400px;
  justify-content: end;
`;

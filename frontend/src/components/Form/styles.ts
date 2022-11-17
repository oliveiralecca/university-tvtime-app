import styled from "styled-components";
import { Form } from "@unform/web";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 30%;
  min-width: 400px;

  align-items: center;
  gap: 15px;
`;

export const Time = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

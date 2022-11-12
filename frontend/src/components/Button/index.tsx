import { ReactNode } from "react";
import * as S from "./styles";

type ButtonProps = {
  path: string;
  label: string;
  icon?: ReactNode;
};

export function Button({ path, label, icon }: ButtonProps) {
  return (
    <S.StyledButton to={path}>
      {icon && icon}
      {label}
    </S.StyledButton>
  );
}

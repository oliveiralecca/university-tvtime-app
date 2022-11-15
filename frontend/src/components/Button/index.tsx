import { ReactNode } from "react";
import * as S from "./styles";

type ButtonProps = {
  path: string;
  label: string;
  icon?: ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
};

export function Button({ path, label, icon, leftIcon, rightIcon }: ButtonProps) {
  return (
    <S.StyledButton to={path}>
      {leftIcon && icon && icon}
      {label}
      {rightIcon && icon && icon}
    </S.StyledButton>
  );
}

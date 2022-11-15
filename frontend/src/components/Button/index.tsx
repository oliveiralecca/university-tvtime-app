import { ReactNode } from "react";
import * as S from "./styles";

type ButtonProps = {
  path: string;
  label: string;
  icon?: ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
  onClick?: () => void;
};

export function Button({ path, label, icon, leftIcon, rightIcon, onClick }: ButtonProps) {
  return (
    <S.StyledButton to={path} onClick={onClick}>
      {leftIcon && icon && icon}
      {label}
      {rightIcon && icon && icon}
    </S.StyledButton>
  );
}

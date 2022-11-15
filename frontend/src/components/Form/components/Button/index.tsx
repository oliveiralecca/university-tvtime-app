import { ReactNode } from "react";
import * as S from "./styles";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined
  label: string;
  icon?: ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
  onClick?: () => void;
};

export function Button({ label, icon, leftIcon, rightIcon, onClick, type }: ButtonProps) {
  return (
    <S.StyledButton onClick={onClick} type={type}>
      {leftIcon && icon && icon}
      {label}
      {rightIcon && icon && icon}
    </S.StyledButton>
  );
}

import { ReactNode } from "react";
import * as S from "./styles";

type TitleProps = {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <S.StyledTitle>
      {children}
    </S.StyledTitle>
  )
}

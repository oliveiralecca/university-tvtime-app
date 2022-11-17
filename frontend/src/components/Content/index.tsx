import { ReactNode } from "react";
import * as S from "./styles";

type ContentProps = {
  children: ReactNode;
  className?: string;
}

export function Content({ children, className }: ContentProps) {
  return (
    <S.Content className={className}>
      {children}
    </S.Content>
  );
}

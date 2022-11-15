import React from "react";
import { NoResultIcon } from "../Icons";

import * as S from "./styles";

type EmptyStateProps = {
  className?: string;
};

export function EmptyState({ className }: EmptyStateProps) {
  return (
    <S.Container className={className}>
      <NoResultIcon />
      <p>Nenhum resultado encontrado</p>
    </S.Container>
  );
}

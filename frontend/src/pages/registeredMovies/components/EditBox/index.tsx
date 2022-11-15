import React from "react";
import { EditIcon, TrashIcon } from "../../../../components/Icons";

import * as S from "./styles";

type EditBoxProps = {
  title: string;
  onDelete: (id: number) => void;
};

export function EditBox({ title, onDelete }: EditBoxProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Actions>
        <S.Action
          title="Editar"
          onClick={() => console.log("function de editar")}
        >
          <EditIcon />
        </S.Action>
        <S.Action
          title="Excluir"
          onClick={() => onDelete}
        >
          <TrashIcon />
        </S.Action>
      </S.Actions>
    </S.Container>
  );
}

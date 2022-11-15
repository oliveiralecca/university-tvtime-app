import React from "react";
import { EditIcon, TrashIcon } from "../../../../components/Icons";

import * as S from "./styles";

type EditBoxProps = {
  title: string;
  editPath: string;
  onDelete: () => void;
  onEdit: () => void;
};

export function EditBox({ title, onDelete, onEdit, editPath }: EditBoxProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Actions>
        <S.Edit
          title="Editar"
          to={editPath}
          onClick={onEdit}
        >
          <EditIcon />
        </S.Edit>
        <S.Delete
          title="Excluir"
          onClick={onDelete}
        >
          <TrashIcon />
        </S.Delete>
      </S.Actions>
    </S.Container>
  );
}

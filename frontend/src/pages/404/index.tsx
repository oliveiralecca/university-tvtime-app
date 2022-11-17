import React from "react";
import { Button } from "../../components/Button";
import { ArrowLeftIcon } from "../../components/Icons";

import * as S from "./styles";

export function Page404() {
  return (
    <S.Container>
      <p>
        <img src="/src/assets/icons/error-404.gif" alt="Error image" />
      </p>
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      <Button path="/home" label="Voltar para o início" leftIcon icon={<ArrowLeftIcon />} />
    </S.Container>
  );
}

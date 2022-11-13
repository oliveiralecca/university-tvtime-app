import React from "react";

import * as S from "./styles";

type Page404Props = {};

export function Page404() {
  return (
    <S.Container>
      <p>
        <img src="/src/assets/icons/error-404.gif" alt="" />
      </p>
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
    </S.Container>
  );
}

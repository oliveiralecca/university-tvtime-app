import React from "react";
import { FallingLines } from "react-loader-spinner";

import * as S from "./styles";

export function Loader() {
  return (
    <S.Container>
      <FallingLines color="#fe6737" width="100" height="100" visible={true} />
    </S.Container>
  );
}

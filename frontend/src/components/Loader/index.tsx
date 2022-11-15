import React from "react";
import { FallingLines } from "react-loader-spinner";

import * as S from "./styles";

type LoaderProps = {
  center?: boolean;
};

export function Loader({ center }: LoaderProps) {
  return (
    <S.Container center={center}>
      <FallingLines color="#fe6737" width="100" height="100" visible={true} />
    </S.Container>
  );
}

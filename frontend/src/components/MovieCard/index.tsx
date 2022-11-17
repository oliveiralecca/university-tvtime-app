import { ReactNode } from "react";
import * as S from "./styles";

type MovieCardProps = {
  name: string;
  poster: string | ReactNode;
  path: string;
  onClick: () => void;
};

export function MovieCard({ name, poster, path, onClick }: MovieCardProps) {
  return (
    <S.Container to={path} onClick={onClick}>
      <>
        {typeof poster === "string" ? <S.Poster src={poster} /> : poster }
        <S.Name>
          <p>{name}</p>
        </S.Name>
      </>
    </S.Container>
  );
}

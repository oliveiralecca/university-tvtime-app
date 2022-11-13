import * as S from "./styles";

type MovieCardProps = {
  name: string;
  poster: string;
  path: string;
  onClick: () => void;
};

export function MovieCard({ name, poster, path, onClick }: MovieCardProps) {

  return (
    <S.Container to={path} onClick={onClick}>
      <S.Poster src={poster} />
      <S.Name>
        <p>{name}</p>
      </S.Name>
    </S.Container>
  );
}

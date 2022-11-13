import { useDataResults } from "../../contexts/dataContext";
import { getMoviesByGenre } from "../../hooks/getMoviesByGenre";
import * as S from "./styles";

type GenreCardProps = {
  name: string;
  icon: string;
  onClick: () => void;
};

export function GenreCard({ name, icon, onClick }: GenreCardProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Icon src={icon} alt={name} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}

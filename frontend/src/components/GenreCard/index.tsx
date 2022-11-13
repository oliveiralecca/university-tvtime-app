import * as S from "./styles";

type GenreCardProps = {
  name: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
};

export function GenreCard({ name, icon, onClick, isActive }: GenreCardProps) {

  return (
    <S.Container
      onClick={onClick}
      className={isActive ? "active" : ""}
    >
      <S.Icon src={icon} alt={name} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}

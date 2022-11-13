import {
  AllIcon,
  EditorIcon,
  GenresIcon,
  MovieIcon,
  TvIcon,
} from "../../../../components/Icons";
import { NavButton } from "../../../../components/NavButton";
import * as S from "./styles";

export function NavBar() {
  return (
    <S.Container>
      <S.Logo>
        <TvIcon />
        <h4>TV Time</h4>
      </S.Logo>
      <S.Navigation>
        <NavButton path="/home" icon={<AllIcon />} label="Home" />
        <NavButton icon={<MovieIcon />} label="Filme" />
        <NavButton path="/cadastrar" icon={<EditorIcon />} label="Cadastrar" />
      </S.Navigation>
    </S.Container>
  );
}

import * as S from "./styles";

type ButtonProps = {
  path: string;
  label: string;
};

export function Button({ path, label }: ButtonProps) {
  return <S.StyledButton to={path}>{label}</S.StyledButton>;
}

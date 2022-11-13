import * as S from "./styles";

type CardProps = {
  name: string;
  age: number;
  gender: string;
}

export function Card({ name, age, gender }: CardProps) {
  return (
    <S.Container>
      <S.Item>
        <span>Nome completo</span>
        <p>{name}</p>
      </S.Item>
      <S.Item>
        <span>Idade</span>
        <p>{age}</p>
      </S.Item>
      <S.Item>
        <span>Sexo</span>
        <p>{gender.toUpperCase()}</p>
      </S.Item>
    </S.Container>
  )
}

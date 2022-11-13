import { useDataResults } from "../../contexts/dataContext";
import { Button } from "../Button";
import * as S from "./styles";

type UserProps = {
  id: number;
}

// export function User({ id }: UserProps) {
//   const { users } = useDataResults();
//   const user = users?.[id];

//   return (
//     <S.Container>
//       <S.User>{user?.name}</S.User>
//       <Button path={`/details/${user?.id}`} label="+ detalhes" />
//     </S.Container>
//   )
// }

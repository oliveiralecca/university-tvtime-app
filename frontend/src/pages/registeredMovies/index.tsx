import { Button } from "../../components/Button";
import { Content } from "../../components/Content";
import { ArrowRightIcon, EditIcon, TrashIcon } from "../../components/Icons";
import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
import api from "../../services/api";
import { EditBox } from "./components/EditBox";
import * as S from "./styles";

export function RegisteredMovies() {
  const { movies, isMoviesLoading } = useDataResults();

  async function onDelete(id: number) {
    if (id) {
      // setIsMoviesDetailsLoading(true);
      const response = await api.delete(`/filme/delete/${id}`);
      // setMoviesDetails(response.data);
      // setIsMoviesDetailsLoading(false);
      console.log(response);
    }
  }

  return (
    <Content>
      {isMoviesLoading ? (
        <Loader center />
      ) : (
        <>
          <S.Info>
            {movies?.filmes.length} filmes
            <Button
              path="/cadastrar/novo"
              label="Cadastrar novo"
              rightIcon
              icon={<ArrowRightIcon />}
            />
          </S.Info>
          <S.Data>
            {movies?.filmes.map((movie) => (
              <EditBox title={movie.titulo} onDelete={() => onDelete(movie.id_filme)} />
            ))}
          </S.Data>
        </>
      )}
    </Content>
  );
}

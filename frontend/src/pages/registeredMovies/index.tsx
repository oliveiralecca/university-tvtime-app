import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../components/Button";
import { Content } from "../../components/Content";
import { EmptyState } from "../../components/EmptyState";
import { ArrowRightIcon } from "../../components/Icons";
import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
import api from "../../services/api";
import { UseGetMovieDetailsResult } from "../dashboard/components/Movies/types";
import { EditBox } from "./components/EditBox";
import * as S from "./styles";

export function RegisteredMovies() {
  const {
    movies,
    isMoviesLoading,
    setIsMoviesDetailsLoading,
    setMoviesDetails,
  } = useDataResults();

  const notifySuccess = (msg: string) =>
    toast.success(msg, { autoClose: 3000 });
  const notifyError = (msg: string) => toast.error(msg, { autoClose: 3000 });

  async function onDelete(id: number) {
    toast.info('Excluindo o filme...', { autoClose: 2000 });
    const response = await api.delete(`/filme/delete/${id}`);
    if (response.data.success) {
      notifySuccess(response.data.success);
    }
    if (response.data.errors?.length) {
      notifyError(response.data.errors?.[0]);
    }
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  async function onEdit(id: number) {
    if (id) {
      setIsMoviesDetailsLoading(true);
      const response = await api.get<UseGetMovieDetailsResult>(
        `/filme/list/${id}`
      );
      setMoviesDetails(response.data);
      setIsMoviesDetailsLoading(false);
    }
  }

  return (
    <Content>
      <ToastContainer newestOnTop />
      {isMoviesLoading ? (
        <Loader center />
      ) : (
        <>
          <S.Info>
            {movies && movies.filmes.length} filmes
            <Button
              path="/cadastrar/novo"
              label="Cadastrar novo"
              rightIcon
              icon={<ArrowRightIcon />}
            />
          </S.Info>
          <S.Data>
            {movies && movies.filmes.length > 0 ? (
              movies?.filmes.map((movie) => (
                <EditBox
                  key={movie.id_filme}
                  title={movie.titulo}
                  onDelete={() => onDelete(movie.id_filme)}
                  onEdit={() => onEdit(movie.id_filme)}
                  editPath={`/filme/${movie.titulo}/editar`}
                />
              ))
            ) : (
              <EmptyState className="empty" />
            )}
          </S.Data>
        </>
      )}
    </Content>
  );
}

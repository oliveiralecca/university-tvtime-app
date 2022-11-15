import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../components/Button";
import { Content } from "../../components/Content";
import { EmptyState } from "../../components/EmptyState";
import { ArrowRightIcon } from "../../components/Icons";
import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
import api from "../../services/api";
import { EditBox } from "./components/EditBox";
import * as S from "./styles";

export function RegisteredMovies() {
  const { movies, isMoviesLoading } = useDataResults();

  const notifySuccess = (msg: string) =>
    toast.success(msg, { autoClose: 3000 });
  const notifyError = (msg: string) => toast.error(msg, { autoClose: 3000 });

  async function onDelete(id: number) {
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

  function onEdit() {
    console.log('editando...')
  }

  return (
    <Content>
      <ToastContainer />
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
                  onEdit={() => onEdit}
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

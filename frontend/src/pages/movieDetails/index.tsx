import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
import * as S from "./styles";

export function MovieDetails() {
  const { moviesDetails, isMoviesDetailsLoading } = useDataResults();

  return (
    <S.Container style={{ background: "none" }}>
      {/* <div className="capa">
        <div>Capa</div>
      </div>
      <div className="description">
        <div className="genero">
          <h1>Titulo do FILME</h1>
          <button>Action</button>
          <button>Ficcao</button>
          <button>Adventure</button>
          <button>Thriller</button>
        </div>
      </div>
      <div className="title-geners">c</div> */}
      {isMoviesDetailsLoading ? (
        <Loader />
      ) : (
        <p>{JSON.stringify(moviesDetails)}</p>
      )}
    </S.Container>
  );
}

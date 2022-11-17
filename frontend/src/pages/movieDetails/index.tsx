import { Content } from "../../components/Content";
import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
import api from "../../services/api";
import { convertDate, convertTime, genreNameTranslate } from "../../utils";
import * as S from "./styles";

export function MovieDetails() {
  const { moviesDetails, isMoviesDetailsLoading } = useDataResults();

  return (
    <Content className="form">
      {isMoviesDetailsLoading ? (
        <Loader />
      ) : (
        <S.Container>
          <div className="capa">
            <div>
              <img
                className="cover"
                src={
                  moviesDetails?.capa
                    ? `${api.defaults.baseURL}/${moviesDetails.capa}`
                    : "/src/assets/icons/no-photo.gif"
                }
                alt={moviesDetails?.titulo}
              />
              <p>
                {`Data de estreia: ${convertDate(
                  moviesDetails?.data_de_estreia!,
                  "details"
                )}`}
              </p>
              <p>
                {`Duração: ${convertTime(moviesDetails?.tempo!, "details")}`}
              </p>
            </div>
          </div>
          <div className="description">
            <div className="genero">
              <h1>{moviesDetails?.titulo}</h1>
              <div>
                {moviesDetails?.generos.map((gen) => (
                  <button>{genreNameTranslate(gen.nome)}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="title-geners">
            <h4>Sinopse</h4>
            <p>{moviesDetails?.resumo}</p>
          </div>
        </S.Container>
      )}
    </Content>
  );
}

import { ReactNode } from "react";
import { Content } from "../../components/Content";
import { NoPhotoIcon } from "../../components/Icons";
import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
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
              {moviesDetails?.capa ? (
                <img
                  className="cover"
                  src={moviesDetails?.capa ? moviesDetails.capa : undefined}
                  alt={moviesDetails?.titulo}
                />
              ) : (
                <NoPhotoIcon className="cover" />
              )}
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
                  <button key={gen.id_genero}>
                    {genreNameTranslate(gen.nome)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="title-geners">
            <h4>Sinopse</h4>
            <p>
              {moviesDetails?.resumo ? (
                moviesDetails.resumo
              ) : (
                <i>Nenhuma sinopse cadastrada</i>
              )}
            </p>
            <br />
            <h4>Títulos equivalentes</h4>
            <p>
              {moviesDetails?.titulos_equivalentes.length ? (
                moviesDetails?.titulos_equivalentes.map(
                  (item, idx) =>
                    `${item}${
                      idx !== moviesDetails?.titulos_equivalentes.length - 1
                        ? ", "
                        : ""
                    }`
                )
              ) : (
                <i>Nenhum título equivalente cadastrado</i>
              )}
            </p>
          </div>
        </S.Container>
      )}
    </Content>
  );
}

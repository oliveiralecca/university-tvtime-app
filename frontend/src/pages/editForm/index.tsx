import React from "react";
import { Content } from "../../components/Content";
import { FormModel } from "../../components/Form";
import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
import { convertDate, convertTime } from "../../utils";

export function EditForm() {
  const { moviesDetails, isMoviesDetailsLoading } = useDataResults();

  // console.log(moviesDetails);

  const movie = {
    titulo: moviesDetails ? moviesDetails.titulo : "",
    tempo: moviesDetails ? convertTime(moviesDetails.tempo) : "",
    data_de_estreia: moviesDetails
      ? convertDate(moviesDetails.data_de_estreia)
      : "",
    resumo: moviesDetails ? moviesDetails.resumo : "",
    titulos_equivalentes: moviesDetails
      ? moviesDetails.titulos_equivalentes?.toString()
      : "",
    generos: moviesDetails
      ? moviesDetails.generos?.map((gen) => gen.id_genero)
      : [],
  };

  return (
    <Content className="form">
      {isMoviesDetailsLoading ? (
        <Loader />
      ) : (
        <FormModel
          action="update"
          movieData={movie}
          movieId={moviesDetails?.id_filme}
        />
      )}
    </Content>
  );
}

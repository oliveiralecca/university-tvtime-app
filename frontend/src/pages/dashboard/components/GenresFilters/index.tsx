import React from "react";
import { FallingLines } from "react-loader-spinner";
import { GenreCard } from "../../../../components/GenreCard";
import { useDataResults } from "../../../../contexts/dataContext";
import { genreNameTranslate } from "../../../../utils";
import api from "../../../../services/api";

import * as S from "./styles";
import { UseGetMoviesByGenreResult } from "../../../../hooks/getMoviesByGenre";

export function GenresFilters() {
  const {
    genres,
    isGenresLoading,
    setMoviesByGenre,
    setIsMoviesByGenreLoading,
  } = useDataResults();

  function handleClick(id: number) {
    if (id) {
      return api
        .get<UseGetMoviesByGenreResult[]>(`/genero/list/${id}`)
        .then((response) => {
          setMoviesByGenre(response.data);
          setIsMoviesByGenreLoading(false);
        });
    }
  }

  return (
    <S.Container>
      {isGenresLoading ? (
        <S.Loader>
          <FallingLines
            color="#fe6737"
            width="100"
            height="100"
            visible={true}
          />
        </S.Loader>
      ) : (
        genres?.map((genre) => (
          <GenreCard
            key={genre.id_genero}
            onClick={() => handleClick(genre.id_genero)}
            // path={`/genero/${genreNameTranslate(genre.nome)}/detalhes`}
            name={genreNameTranslate(genre.nome)}
            icon={`${api.defaults.baseURL}/${genre.icone}`}
          />
        ))
      )}
    </S.Container>
  );
}

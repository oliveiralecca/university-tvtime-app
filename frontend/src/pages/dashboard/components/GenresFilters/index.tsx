import React from "react";
import { FallingLines } from "react-loader-spinner";
import { GenreCard } from "../../../../components/GenreCard";
import { useDataResults } from "../../../../contexts/dataContext";
import { genreNameTranslate } from "../../../../utils";
import api from "../../../../services/api";

import * as S from "./styles";
import { Movie, UseGetMoviesByGenreResult } from "./types";
import { Loader } from "../../../../components/Loader";

export function GenresFilters() {
  const {
    genres,
    isGenresLoading,
    setMoviesByGenre,
    setIsMoviesByGenreLoading,
    setMovies,
    setIsMoviesLoading
  } = useDataResults();

  function handleFetchMoviesByGenre(id: number) {
    if (id) {
      setIsMoviesByGenreLoading(true);
      return api
        .get<UseGetMoviesByGenreResult[]>(`/genero/list/${id}`)
        .then((response) => {
          setMoviesByGenre(response.data);
          setIsMoviesByGenreLoading(false);
        });
    }
  }

  function handleFetchAllMovies() {
    return api
      .get<Movie[]>(`/filme/list`)
      .then((response) => {
        setMovies(response.data);
        setIsMoviesLoading(false);
      });
  }

  return (
    <S.Container>
      {isGenresLoading ? (
        <Loader />
      ) : (
        <>
          <GenreCard
            onClick={handleFetchAllMovies}
            name="Todos"
            icon="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/fire_1f525.png"
          />
          {genres?.map((genre) => (
            <GenreCard
              key={genre.id_genero}
              onClick={() => handleFetchMoviesByGenre(genre.id_genero)}
              // path={`/genero/${genreNameTranslate(genre.nome)}/detalhes`}
              name={genreNameTranslate(genre.nome)}
              icon={`${api.defaults.baseURL}/${genre.icone}`}
            />
          ))}
        </>
      )}
    </S.Container>
  );
}

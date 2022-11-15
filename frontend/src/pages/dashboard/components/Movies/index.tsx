import React, { useEffect } from "react";
import { EmptyState } from "../../../../components/EmptyState";
import { Loader } from "../../../../components/Loader";
import { MovieCard } from "../../../../components/MovieCard";
import { useDataResults } from "../../../../contexts/dataContext";
import api from "../../../../services/api";

import * as S from "./styles";
import { UseGetMovieDetailsResult } from "./types";

export function Movies() {
  const {
    moviesByGenre,
    isMoviesByGenreLoading,
    movies,
    isMoviesLoading,
    activeGenre,
    setIsMoviesDetailsLoading,
    setMoviesDetails,
  } = useDataResults();

  let moviesResults;

  useEffect(() => {
    moviesResults = movies;
  }, []);

  moviesResults = activeGenre === "Todos" ? movies : moviesByGenre;

  async function handleFetchMovieDetails(id: number) {
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
    <S.Container>
      {isMoviesLoading || isMoviesByGenreLoading ? (
        <Loader />
      ) : (
        (moviesResults?.filmes.length &&
          moviesResults.filmes.map((filme, idx) => (
            <MovieCard
              key={`${filme.id_filme}-${idx}`}
              onClick={() => handleFetchMovieDetails(filme.id_filme)}
              name={filme.titulo}
              poster={`${api.defaults.baseURL}/${filme.capa}`}
              path={`/filme/${filme.titulo}/detalhes`}
            />
          ))) || <EmptyState />
      )}
    </S.Container>
  );
}

{
  /* poster={`${api.defaults.baseURL}/${filme.capa}`} */
}

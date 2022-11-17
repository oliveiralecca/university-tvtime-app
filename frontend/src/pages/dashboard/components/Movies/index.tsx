import React, { useEffect } from "react";
import { EmptyState } from "../../../../components/EmptyState";
import { NoPhotoIcon } from "../../../../components/Icons";
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
    setIsMoviesLoading,
    activeGenre,
    setActiveGenre,
    setIsMoviesDetailsLoading,
    setMoviesDetails,
  } = useDataResults();

  let moviesResults;

  useEffect(() => {
    setActiveGenre("Todos");
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
              poster={
                filme.capa
                  ? `${api.defaults.baseURL}/${filme.capa}`
                  : <NoPhotoIcon />
              }
              path={`/filme/${filme.titulo}/detalhes`}
            />
          ))) || <EmptyState />
      )}
    </S.Container>
  );
}

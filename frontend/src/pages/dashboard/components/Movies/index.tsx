import React, { useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import { EmptyState } from "../../../../components/EmptyState";
import { Loader } from "../../../../components/Loader";
import { MovieCard } from "../../../../components/MovieCard";
import { useDataResults } from "../../../../contexts/dataContext";

import * as S from "./styles";

export function Movies() {
  const {
    moviesByGenre,
    isMoviesByGenreLoading,
    movies,
    isMoviesLoading,
    activeGenre,
  } = useDataResults();

  let moviesResults;

  useEffect(() => {
    moviesResults = movies;
  }, []);

  moviesResults = activeGenre === "Todos" ? movies : moviesByGenre;

  return (
    <S.Container>
      {isMoviesLoading || isMoviesByGenreLoading ? (
        <Loader />
      ) : (
        (moviesResults?.filmes.length &&
          moviesResults.filmes.map((filme) => (
            <MovieCard
              name={filme.titulo}
              poster="https://posters.movieposterdb.com/13_02/2001/241527/l_241527_da927a3d.jpg"
              path={`/filme/${filme.id_filme}/${filme.titulo}/detalhes`}
            />
          ))) || <EmptyState />
      )}
    </S.Container>
  );
}

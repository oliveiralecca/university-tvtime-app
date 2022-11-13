import React, { useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import { EmptyState } from "../../../../components/EmptyState";
import { Loader } from "../../../../components/Loader";
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

  // console.log(moviesByGenre?.filmes.map(filme => filme.id)); => pego o id e passo para o componente de filme para fazer requisição desse filme específico

  return (
    <S.Container>
      {isMoviesLoading || isMoviesByGenreLoading ? (
        <Loader />
      ) : (
        (moviesResults?.filmes.length &&
          moviesResults.filmes.map((filme) => <li>{filme.titulo}</li>)) || (
          <EmptyState />
        )
      )}
    </S.Container>
  );
}

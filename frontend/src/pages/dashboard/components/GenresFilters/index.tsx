import React, { useState } from "react";
import { GenreCard } from "../../../../components/GenreCard";
import { useDataResults } from "../../../../contexts/dataContext";
import { genreNameTranslate } from "../../../../utils";
import api from "../../../../services/api";

import * as S from "./styles";
import { UseGetMovies, UseGetMoviesByGenreResult } from "./types";
import { Loader } from "../../../../components/Loader";

export function GenresFilters() {
  const {
    genres,
    isGenresLoading,
    setMoviesByGenre,
    setIsMoviesByGenreLoading,
    setMovies,
    setIsMoviesLoading,
    setActiveGenre,
  } = useDataResults();

  const [active, setActive] = useState<number>(0);

  async function handleFetchMoviesByGenre(id: number) {
    if (id) {
      setActive(id);
      setActiveGenre("");
      setIsMoviesByGenreLoading(true);
      const response = await api.get<UseGetMoviesByGenreResult>(
        `/genero/list/${id}`
      );
      setMoviesByGenre(response.data);
      setIsMoviesByGenreLoading(false);
    }
  }

  async function handleFetchAllMovies() {
    setActive(0);
    setActiveGenre("Todos");
    const response = await api.get<UseGetMovies>(`/filme/list`);
    setMovies(response.data);
    setIsMoviesLoading(false);
  }

  return (
    <S.Container>
      {isGenresLoading ? (
        <Loader />
      ) : (
        <>
          <GenreCard
            onClick={handleFetchAllMovies}
            isActive={active === 0}
            name="Todos"
            icon="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/fire_1f525.png"
          />
          {genres?.map((genre) => (
            <GenreCard
              key={genre.id_genero}
              isActive={active === genre.id_genero}
              onClick={() => handleFetchMoviesByGenre(genre.id_genero)}
              name={genreNameTranslate(genre.nome)}
              icon={genre.icone}
            />
          ))}
        </>
      )}
    </S.Container>
  );
}

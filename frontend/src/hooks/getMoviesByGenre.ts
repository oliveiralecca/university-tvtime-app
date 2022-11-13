import { useEffect, useState } from "react";
import api from "../services/api";

type Movie = {
  id_video: number;
  titulo: string;
  tempo: string;
  data_de_estreia: string;
  resumo: string;
  id_diretor: number | null;
  id_filme: number;
  capa: string | null;
  titulos_equivalentes: string[];
  id_estudio: number | null;
};

export type UseGetMoviesByGenreResult = {
  id_genero: number;
  nome: string;
  icone: string;
  filmes: Movie[];
};

export function getMoviesByGenre(genreId: number) {
  const [moviesByGenre, setmoviesByGenre] = useState<
    UseGetMoviesByGenreResult[]
  >([]);
  // const [isGenresLoading, setIsGenresLoading] = useState(true);

  useEffect(() => {
    if (genreId) {
      api
        .get<UseGetMoviesByGenreResult[]>(`/genero/list/${genreId}`)
        .then((response) => {
          setmoviesByGenre(response.data);
          // setIsGenresLoading(false);
        });
    }
  }, []);

  return { moviesByGenre };
}

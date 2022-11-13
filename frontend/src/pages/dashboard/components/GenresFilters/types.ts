import { UseGetGenresResult } from "../../../../hooks/useGetGenres";

export type Movie = {
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

export type UseGetMovies = {
  filmes: Movie[];
  generos: UseGetGenresResult[];
}

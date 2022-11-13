import { UseGetGenresResult } from "../../../../hooks/useGetGenres";

export type UseGetMovieDetailsResult = {
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
  generos: UseGetGenresResult[];
};

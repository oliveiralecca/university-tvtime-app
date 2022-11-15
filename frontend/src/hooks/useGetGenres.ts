import { useEffect, useState } from "react";
import api from "../services/api";

export type UseGetGenresResult = {
  id_genero: number;
  nome: string;
  icone: string;
};

export function useGetGenres() {
  const [genres, setGenres] = useState<UseGetGenresResult[]>([]);
  const [isGenresLoading, setIsGenresLoading] = useState(true);

  useEffect(() => {
    api.get<UseGetGenresResult[]>("/genero/list").then((response) => {
      setGenres(response.data);
      setIsGenresLoading(false);
    });
  }, []);

  return { genres, isGenresLoading };
}

import { useEffect, useState } from "react";
import { Movie, UseGetMovies } from "../pages/dashboard/components/GenresFilters/types";
import api from "../services/api";

export type UseGetMoviesResult = UseGetMovies;

export function useGetMovies() {
  const [movies, setMovies] = useState<UseGetMoviesResult>();
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);

  useEffect(() => {
    api.get<UseGetMoviesResult>("/filme/list").then((response) => {
      setMovies(response.data);
      setIsMoviesLoading(false);
    });
  }, []);

  return { movies, isMoviesLoading, setMovies, setIsMoviesLoading };
}

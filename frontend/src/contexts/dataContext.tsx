import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { UseGetGenresResult, useGetGenres } from "../hooks/useGetGenres";
import { useGetMovies, UseGetMoviesResult } from "../hooks/useGetMovies";
import { UseGetMoviesByGenreResult } from "../pages/dashboard/components/GenresFilters/types";
import { UseGetMovieDetailsResult } from "../pages/dashboard/components/Movies/types";

type DataState = {
  genres: UseGetGenresResult[];
  isGenresLoading: boolean;
  moviesByGenre: UseGetMoviesByGenreResult | undefined;
  setMoviesByGenre: Dispatch<
    SetStateAction<UseGetMoviesByGenreResult | undefined>
  >;
  isMoviesByGenreLoading: boolean | undefined;
  setIsMoviesByGenreLoading: Dispatch<SetStateAction<boolean | undefined>>;
  movies: UseGetMoviesResult | undefined;
  isMoviesLoading: boolean;
  setIsMoviesLoading: Dispatch<SetStateAction<boolean>>;
  setMovies: Dispatch<SetStateAction<UseGetMoviesResult | undefined>>;
  activeGenre: string;
  setActiveGenre: Dispatch<SetStateAction<string>>;
  moviesDetails: UseGetMovieDetailsResult | undefined;
  setMoviesDetails: Dispatch<
    SetStateAction<UseGetMovieDetailsResult | undefined>
  >;
  isMoviesDetailsLoading: boolean | undefined;
  setIsMoviesDetailsLoading: Dispatch<SetStateAction<boolean | undefined>>;
};

type DataProviderProps = {
  children: ReactNode;
};

const DataContext = createContext<DataState | null>(null);

function DataProvider({ children }: DataProviderProps) {
  const [moviesByGenre, setMoviesByGenre] = useState<
    UseGetMoviesByGenreResult | undefined
  >();
  const [isMoviesByGenreLoading, setIsMoviesByGenreLoading] = useState<
    boolean | undefined
  >();
  const [moviesDetails, setMoviesDetails] = useState<
  UseGetMovieDetailsResult | undefined
  >();
  const [isMoviesDetailsLoading, setIsMoviesDetailsLoading] = useState<
    boolean | undefined
  >();
  const [activeGenre, setActiveGenre] = useState<string>("Todos");
  const { genres, isGenresLoading } = useGetGenres();
  const { movies, isMoviesLoading, setMovies, setIsMoviesLoading } =
    useGetMovies();

  return (
    <DataContext.Provider
      value={{
        genres,
        isGenresLoading,
        moviesByGenre,
        setMoviesByGenre,
        isMoviesByGenreLoading,
        setIsMoviesByGenreLoading,
        movies,
        isMoviesLoading,
        setIsMoviesLoading,
        setMovies,
        activeGenre,
        setActiveGenre,
        moviesDetails,
        setMoviesDetails,
        isMoviesDetailsLoading,
        setIsMoviesDetailsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useDataResults() {
  const context = useContext(DataContext);

  if (!context)
    throw new Error("Data context must not be used outside its provider");

  return context;
}

export { DataContext, DataProvider, useDataResults };

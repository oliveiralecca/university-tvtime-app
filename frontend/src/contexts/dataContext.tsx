import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { UseGetGenresResult, useGetGenres } from "../hooks/useGetGenres";
import { UseGetMoviesByGenreResult } from "../hooks/getMoviesByGenre";

type DataState = {
  genres: UseGetGenresResult[];
  isGenresLoading: boolean;
  moviesByGenre: UseGetMoviesByGenreResult[] | undefined;
  setMoviesByGenre: Dispatch<SetStateAction<UseGetMoviesByGenreResult[] | undefined>>;
  isMoviesByGenreLoading: boolean;
  setIsMoviesByGenreLoading: Dispatch<SetStateAction<boolean>>;
};

type DataProviderProps = {
  children: ReactNode;
};

const DataContext = createContext<DataState | null>(null);

function DataProvider({ children }: DataProviderProps) {
  const [moviesByGenre, setMoviesByGenre] = useState<UseGetMoviesByGenreResult[] | undefined>();
  const [isMoviesByGenreLoading, setIsMoviesByGenreLoading] = useState(true);
  const { genres, isGenresLoading } = useGetGenres();

  return (
    <DataContext.Provider
      value={{ genres, isGenresLoading, moviesByGenre, setMoviesByGenre, isMoviesByGenreLoading, setIsMoviesByGenreLoading }}
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

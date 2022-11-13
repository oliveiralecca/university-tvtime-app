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
  moviesByGenre: UseGetMoviesByGenreResult[];
  setMoviesByGenre: Dispatch<SetStateAction<never[]>>;
};

type DataProviderProps = {
  children: ReactNode;
};

const DataContext = createContext<DataState | null>(null);

function DataProvider({ children }: DataProviderProps) {
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const { genres, isGenresLoading } = useGetGenres();

  return (
    <DataContext.Provider
      value={{ genres, isGenresLoading, moviesByGenre, setMoviesByGenre }}
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

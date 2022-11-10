import {
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { useData, UseDataResult } from '../hooks/useData';

type DataState = {
  users: UseDataResult[];
  isLoading: boolean;
}

type DataProviderProps = {
  children: ReactNode;
}

const DataContext = createContext<DataState | null>(null)

function DataProvider({ children }: DataProviderProps) {
  const { users, isLoading } = useData()

  return (
    <DataContext.Provider value={{ users, isLoading }}>
      {children}
    </DataContext.Provider>
  )
}

function useDataResults() {
  const context = useContext(DataContext)

  if (!context) throw new Error('Data context must not be used outside its provider')

  return context
}

export { DataContext, DataProvider, useDataResults };

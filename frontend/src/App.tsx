import { DataProvider } from "./contexts/dataContext";
import { AppRoutes } from "./Routes";

export function App() {
  return (
    <DataProvider>
      <AppRoutes />
    </DataProvider>
  )
}


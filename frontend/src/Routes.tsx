import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Dashboard } from "./pages/dashboard";
import { RegisterForm } from "./pages/registerForm";
import { AppSkeleton } from "./layouts/AppSkeleton";
import { Page404 } from "./pages/404";
import { MovieDetails } from "./pages/movieDetails";
import { About } from "./pages/about";
import { RegisteredMovies } from "./pages/registeredMovies";
import { EditForm } from "./pages/editForm";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={<AppSkeleton children={<Dashboard />} title="Dashboard" />}
        />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/filme/:movie/detalhes"
          element={<AppSkeleton children={<MovieDetails />} title="Filme" />}
        />
        <Route
          path="/cadastrar"
          element={
            <AppSkeleton
              children={<RegisteredMovies />}
              title="Filmes cadastrados"
            />
          }
        />
        <Route
          path="/cadastrar/novo"
          element={
            <AppSkeleton children={<RegisterForm />} title="Cadastrar novo" />
          }
        />
        <Route
          path="/filme/:movie/editar"
          element={
            <AppSkeleton children={<EditForm />} title="Editar" />
          }
        />
        <Route
          path="/sobre"
          element={<AppSkeleton children={<About />} title="Sobre" />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";
import { RegisterForm } from "./pages/form";
import { AppSkeleton } from "./layouts/AppSkeleton";
import { Page404 } from "./pages/404";
import { MovieDetails } from "./pages/movieDetails";

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
          path="/cadastrar"
          element={
            <AppSkeleton
              children={
                <p>
                  Rota com filmes cadastrados e opção de editar + botão para
                  form de cadastro
                </p>
              }
              title="Filmes cadastrados"
            />
          }
        />
        <Route
          path="/cadastrar/novo"
          element={
            <AppSkeleton children={<RegisterForm />} title="Cadastrar filme" />
          }
        />
        {/* <Route path="/details/:user" element={<Details />} /> */}
        <Route 
          path="/teste/inicio"
          element={<AppSkeleton children= {<MovieDetails/>} title="Teste"/>}
          />       
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { MovieDetails } from "./pages/movieDetails";
import { Dashboard } from "./pages/dashboard";
import { Form } from "./pages/form";
import { AppSkeleton } from "./layouts/AppSkeleton";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppSkeleton children={<Dashboard />} title="Dashboard" />} />              
        <Route path="/cadastrar/novo" element={<AppSkeleton children={<Form />} title="Cadastrar filme" />} />              
        {/* <Route path="/details/:user" element={<Details />} /> */}
      </Routes>
    </Router>
  )
}

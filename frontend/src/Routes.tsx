import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";
import { RegisterForm } from "./pages/form";
import { AppSkeleton } from "./layouts/AppSkeleton";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AppSkeleton children={<Dashboard />} title="Dashboard" />}
        />
        <Route
          path="/cadastrar/novo"
          element={<AppSkeleton children={<RegisterForm />} title="Cadastrar filme" />}
        />
        {/* <Route path="/details/:user" element={<Details />} /> */}
      </Routes>
    </Router>
  );
}

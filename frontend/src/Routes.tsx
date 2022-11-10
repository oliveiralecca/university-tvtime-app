import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { MovieDetails } from "./pages/movieDetails";
import { Dashboard } from "./pages/dashboard";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />              
        {/* <Route path="/details/:user" element={<Details />} /> */}
      </Routes>
    </Router>
  )
}

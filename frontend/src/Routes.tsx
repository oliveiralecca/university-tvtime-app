import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Details } from "./pages/details";
import { Home } from "./pages/home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />              
        <Route path="/details/:user" element={<Details />} />
      </Routes>
    </Router>
  )
}

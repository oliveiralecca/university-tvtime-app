import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Details } from "./pages/details";
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

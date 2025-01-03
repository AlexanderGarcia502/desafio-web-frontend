import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home";
import OperatorPage from "../pages/Operator";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          element={<ProtectedRoute allowedRoles={["Usuario Comercial"]} />}
        >
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute allowedRoles={["Administrador", "Operador"]} />
          }
        >
          <Route path="/management" element={<OperatorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

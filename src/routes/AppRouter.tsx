import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home";
import OperatorPage from "../pages/Operator";
import ManagmentLayout from "../components/layouts/ManagmentLayout";

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
          path="/management"
          element={
            <ManagmentLayout allowedRoles={["Administrador", "Operador"]} />
          }
        >
          <Route index element={<OperatorPage />} />
          <Route path="profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

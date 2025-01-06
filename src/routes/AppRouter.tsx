import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home";
import OperatorPage from "../pages/Operator";
import ManagmentLayout from "../components/layouts/ManagmentLayout";
import ProductsPage from "../pages/Products";
import UsersPage from "../pages/UsersPage";
import OrdersPage from "../pages/OrdersPage";
import CategoriesPage from "../pages/CategoriesPage";

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
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

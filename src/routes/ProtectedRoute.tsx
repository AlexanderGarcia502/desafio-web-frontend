import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    const { rol } = user;
    return (
      <Navigate
        to={rol === "Administrador" || rol === "Operador" ? "/management" : "/"}
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;

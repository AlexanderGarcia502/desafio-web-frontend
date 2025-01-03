import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getInitialRouteByRole } from "../utils/getInitialRouteByRole";

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
    return <Navigate to={getInitialRouteByRole(rol)} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

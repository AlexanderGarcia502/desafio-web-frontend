import { Navigate } from "react-router";
import { getInitialRouteByRole } from "../utils/getInitialRouteByRole";
import { isAuthenticated } from "../utils/isAuthenticated";

export const useProtectedRoute = (allowedRoles?: string[]) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    const { rol } = user;
    return <Navigate to={getInitialRouteByRole(rol)} replace />;
  }
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return { token, user };
};

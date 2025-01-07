import { useNavigate } from "react-router";
import { getInitialRouteByRole } from "../utils/getInitialRouteByRole";
import { isAuthenticated } from "../utils/isAuthenticated";
import { useEffect } from "react";

export const useProtectedRoute = (allowedRoles?: string[]) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    if (!token) {
      return navigate("/login", { replace: true });
    }

    if (allowedRoles && !allowedRoles.includes(user.rol)) {
      const { rol } = user;
      return navigate(getInitialRouteByRole(rol), { replace: true });
    }
    if (!isAuthenticated()) {
      return navigate("/login", { replace: true });
    }
  };

  return { token, user };
};

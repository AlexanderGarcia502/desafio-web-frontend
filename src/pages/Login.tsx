import { useMutation } from "@tanstack/react-query";
import LoginTemplate from "../components/templates/login";
import { UserServices } from "../services/user-services";
import { useNavigate } from "react-router";
import { useEffect } from "react";

interface ILoginProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const userServices = new UserServices();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token && user && user.rol) {
      if (user.rol === "Administrador" || user.rol === "Operador") {
        navigate("/management");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  const { mutate: login } = useMutation({
    mutationFn: async ({ email, password }: ILoginProps) => {
      return userServices.login(email, password);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      if (data.rol === "Administrador" || data.rol === "Operador")
        navigate("/management");
      else navigate("/");
    },
    onError: (err) => {
      console.error("Error al iniciar sesión:", err.message);
    },
  });

  const onSubmit = async ({ email, password }: ILoginProps) => {
    login({ email, password });
  };
  return <LoginTemplate onSubmit={onSubmit} />;
};

export default LoginPage;

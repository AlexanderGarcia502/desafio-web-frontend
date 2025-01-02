import {
  Button,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ILoginForm, ILoginFormProps } from "./interface";
import React from "react";

const Container = styled("div")(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}));
const LoginSection: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginForm>();
  return (
    <Paper
      sx={{
        width: { sm: 600, xs: "100%", md: 800 },
        padding: { xs: 2, md: 4 },
      }}
    >
      <Stack rowGap={2}>
        <Container>
          <Typography variant="h4" alignItems={"center"}>
            Iniciar Sesion
          </Typography>
        </Container>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "El correo electronico es requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "El correo electronico es invalido",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Correo Electronico"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "La contrasena es requerida",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Contrasena"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button variant="outlined" onClick={handleSubmit(onSubmit)}>
          Entrar
        </Button>
      </Stack>
    </Paper>
  );
};

export default LoginSection;

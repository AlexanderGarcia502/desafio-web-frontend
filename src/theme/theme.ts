import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    allVariants: {
      color: "#394759",
      lightingColor: "#ffffff",
    },
  },
  palette: {
    primary: {
      main: "#1E40AF",
    },
    secondary: {
      main: "#394759",
    },
    info: {
      main: "#2196f3",
    },
    warning: {
      main: "#ff9800",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
    text: {
      primary: "#394759",
      secondary: "#ffffff",
    },
    background: {
      default: "#F1F5F9",
    },
  },
});

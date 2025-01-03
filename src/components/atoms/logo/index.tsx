import { SxProps, Theme, Typography, useTheme } from "@mui/material";

interface ILogoProps {
  sx: SxProps<Theme> | undefined;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "inherit"
    | undefined;
}

const Logo = ({ sx, variant = "h6" }: ILogoProps) => {
  const theme = useTheme();
  return (
    <Typography
      variant={variant}
      color={theme.palette.text.secondary}
      sx={{
        fontWeight: "bold",
        fontStyle: "italic",
        fontFamily: "'Roboto', sans-serif",
        ...sx,
      }}
    >
      Mi Tiendita
    </Typography>
  );
};

export default Logo;

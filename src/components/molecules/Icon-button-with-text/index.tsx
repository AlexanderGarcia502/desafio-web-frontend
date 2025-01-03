import { Box, IconButton, Typography, useTheme } from "@mui/material";

interface IIconButtonWithTextProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  sx?: object;
  variantText?:
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
    | "caption"
    | "overline"
    | undefined;
  iconColor?: "inherit" | "primary" | "secondary" | "default";
  fontWeight?: string;
  sxText?: object;
}

const IconButtonWithText = ({
  icon,
  text,
  onClick,
  sx,
  variantText = "body1",
  iconColor = "inherit",
  sxText,
}: IIconButtonWithTextProps) => {
  const theme = useTheme();
  return (
    <Box onClick={onClick} sx={sx}>
      <IconButton color={iconColor}>{icon}</IconButton>
      <Typography
        color={theme.palette.text.secondary}
        variant={variantText}
        sx={sxText}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default IconButtonWithText;

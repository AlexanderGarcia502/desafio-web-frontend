import { Button, styled, useTheme } from "@mui/material";
import { IRoundedButtonProps } from "./interface";

const ButtonStyled = styled(Button)({
  borderRadius: 60,
});
export default function RoundedButton({
  title,
  onClick,
  isSelected,
  ...rest
}: IRoundedButtonProps) {
  const theme = useTheme();
  return (
    <ButtonStyled
      onClick={onClick}
      sx={{
        minWidth: { xs: 150, md: 200 },
        fontSize: { xs: 10, md: "0.875rem" },
        borderColor: isSelected
          ? theme.palette.primary.main
          : theme.palette.secondary.main,

        color: isSelected
          ? theme.palette.text.secondary
          : theme.palette.secondary.main,
      }}
      variant={isSelected ? "contained" : "outlined"}
      {...rest}
    >
      {title}
    </ButtonStyled>
  );
}

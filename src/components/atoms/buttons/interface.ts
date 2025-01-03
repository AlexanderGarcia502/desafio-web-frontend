import { ButtonProps } from "@mui/material";

export interface IRoundedButtonProps extends ButtonProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

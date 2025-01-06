import { PaperProps } from "@mui/material";

export interface ISearchComponentProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
  paperProps?: PaperProps;
}

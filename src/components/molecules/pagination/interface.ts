import { ChangeEvent } from "react";

export interface IPaginationProps {
  count: number;
  currentPage: number;
  disabled?: boolean;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
}

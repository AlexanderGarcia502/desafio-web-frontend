import { ChangeEvent } from "react";

export interface IPaginationProps {
  count: number;
  currentPage: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
}

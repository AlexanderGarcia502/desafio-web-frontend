import { Pagination, Stack } from "@mui/material";
import { IPaginationProps } from "./interface";

const PaginationBar = ({ count, currentPage, onChange }: IPaginationProps) => {
  return (
    <Stack flexDirection={"row"} justifyContent="center" marginY={5}>
      <Pagination
        count={count}
        page={currentPage}
        onChange={onChange}
        color="primary"
        size="large"
      />
    </Stack>
  );
};

export default PaginationBar;

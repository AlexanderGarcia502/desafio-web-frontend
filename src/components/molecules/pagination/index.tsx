import { Pagination, Stack } from "@mui/material";
import { IPaginationProps } from "./interface";

const PaginationBar = ({
  count,
  currentPage,
  onChange,
  disabled,
}: IPaginationProps) => {
  return (
    <Stack flexDirection={"row"} justifyContent="center" marginY={2}>
      <Pagination
        count={count}
        page={currentPage}
        onChange={onChange}
        color="primary"
        size="large"
        disabled={disabled}
      />
    </Stack>
  );
};

export default PaginationBar;

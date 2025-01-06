import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchComponentProps } from "./interface";

export default function SearchComponent({
  placeholder,
  onSearch,
  paperProps: { sx, ...paperProps } = {},
}: ISearchComponentProps) {
  const [value, setValue] = React.useState("");

  return (
    <Paper
      component="div"
      onKeyDown={(e: KeyboardEvent) =>
        e.key === "Enter" && onSearch && onSearch(value)
      }
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        ...(sx || {}),
      }}
      {...paperProps}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value?.trim())}
        inputProps={{ "aria-label": placeholder ?? "search" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => onSearch && onSearch(value)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

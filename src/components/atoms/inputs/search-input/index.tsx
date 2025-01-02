import { useState } from "react";
import { IconButton, InputBase, styled } from "@mui/material";
import { Search } from "@mui/icons-material";

interface ISearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: "0 8px",
  marginLeft: theme.spacing(2),
  flexGrow: 1,
}));

const SearchInput = ({ placeholder, onChange }: ISearchInputProps) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    onChange(event.target.value);
  };

  return (
    <SearchBar>
      <InputBase
        placeholder={placeholder}
        sx={{ ml: 1, flex: 1 }}
        onChange={handleChange}
        value={inputText}
      />
      <IconButton>
        <Search />
      </IconButton>
    </SearchBar>
  );
};

export default SearchInput;

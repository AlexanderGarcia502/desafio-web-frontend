import Navbar from "../../organisms/navbar";
import CategoriesBar from "../../organisms/categories-bar";
import { AccountCircle, History } from "@mui/icons-material";
import ProductList from "../../organisms/products-list";
import React from "react";
import { IHomeTemplateChildrenProps, IHomeTemplateProps } from "./interface";
import { Stack } from "@mui/material";

const HomeTemplate: React.FC<IHomeTemplateProps> &
  IHomeTemplateChildrenProps = ({ children }) => {
  return (
    <>
      <Navbar>
        <Navbar.item
          text="Mi cuenta"
          icon={<AccountCircle />}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: 2,
            cursor: "pointer",
          }}
        />
        <Navbar.item
          text="Historial"
          icon={<History />}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: 2,
            cursor: "pointer",
          }}
        />
      </Navbar>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Stack rowGap={2}>{children}</Stack>
      </div>
    </>
  );
};

HomeTemplate.ProductList = ProductList;
HomeTemplate.CategoryList = CategoriesBar;

export default HomeTemplate;

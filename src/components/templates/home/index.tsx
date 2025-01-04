import Navbar from "../../organisms/navbar";
import CategoriesBar from "../../organisms/categories-bar";
import { AccountCircle, History } from "@mui/icons-material";
import ProductList from "../../organisms/products-list";
import { IHomeTemplateChildrenProps, IHomeTemplateProps } from "./interface";
import { Stack } from "@mui/material";
import PaginationBar from "../../molecules/pagination";

const HomeTemplate: React.FC<IHomeTemplateProps> &
  IHomeTemplateChildrenProps = ({ children, onChangeSearchInput }) => {
  return (
    <>
      <Navbar onChangeSearchInput={onChangeSearchInput}>
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
HomeTemplate.Pagination = PaginationBar;

export default HomeTemplate;

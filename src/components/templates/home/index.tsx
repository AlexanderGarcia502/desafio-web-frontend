import Navbar from "../../organisms/navbar";
import CategoriesBar from "../../organisms/categories-bar";
import { AccountCircle, History } from "@mui/icons-material";
import ProductList from "../../organisms/products-list";
import { IHomeTemplateChildrenProps, IHomeTemplateProps } from "./interface";
import { Stack } from "@mui/material";
import { useState } from "react";
import { CartDrawer } from "../../organisms/cart-drawer";

const HomeTemplate: React.FC<IHomeTemplateProps> &
  IHomeTemplateChildrenProps = ({
  children,
  cartList,
  onChangeSearchInput,
  cartActions,
  totalPurchases,
  onSendOrder,
}) => {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);

  return (
    <>
      <Navbar
        onChangeSearchInput={onChangeSearchInput}
        onClickCartButton={() => setOpenCartDrawer(true)}
      >
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
      <CartDrawer
        totalPurchases={totalPurchases}
        cartList={cartList}
        cartActions={cartActions}
        open={openCartDrawer}
        onClose={() => setOpenCartDrawer(!openCartDrawer)}
        onSendOrder={onSendOrder}
      />
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Stack rowGap={2}>{children}</Stack>
      </div>
    </>
  );
};

HomeTemplate.ProductList = ProductList;
HomeTemplate.CategoryList = CategoriesBar;

export default HomeTemplate;

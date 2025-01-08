import Navbar from "../../organisms/navbar";
import CategoriesBar from "../../organisms/categories-bar";
import ProductList from "../../organisms/products-list";
import { IHomeTemplateChildrenProps, IHomeTemplateProps } from "./interface";
import { Stack } from "@mui/material";
import { useState } from "react";
import { CartDrawer } from "../../organisms/cart-drawer";
import MenuDrawer from "../../organisms/menu-drawer";

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
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const toggleMenuDrawer = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <>
      <Navbar
        onClickMenuButton={() => setOpenMenuDrawer(true)}
        onChangeSearchInput={onChangeSearchInput}
        onClickCartButton={() => setOpenCartDrawer(true)}
      />

      <MenuDrawer open={openMenuDrawer} toggleMenuDrawer={toggleMenuDrawer} />

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

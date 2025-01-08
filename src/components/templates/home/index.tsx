import Navbar from "../../organisms/navbar";
import CategoriesBar from "../../organisms/categories-bar";
import ProductList from "../../organisms/products-list";
import { IHomeTemplateChildrenProps, IHomeTemplateProps } from "./interface";
import { Modal, Stack } from "@mui/material";
import { useState } from "react";
import { CartDrawer } from "../../organisms/cart-drawer";
import MenuDrawer from "../../organisms/menu-drawer";
import CollapsibleTable from "../../organisms/historyDrawer";

const HomeTemplate: React.FC<IHomeTemplateProps> &
  IHomeTemplateChildrenProps = ({
  children,
  cartList,
  onChangeSearchInput,
  cartActions,
  totalPurchases,
  onSendOrder,
  rows,
}) => {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  const [openHistoryDrawer, setOpenHistoryDrawer] = useState(false);

  const toggleMenuDrawer = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <>
      <Navbar
        onHistoryAction={() => setOpenHistoryDrawer(true)}
        onClickMenuButton={() => setOpenMenuDrawer(true)}
        onChangeSearchInput={onChangeSearchInput}
        onClickCartButton={() => setOpenCartDrawer(true)}
      />
      <Modal
        open={openHistoryDrawer}
        onClose={() => setOpenHistoryDrawer(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CollapsibleTable
          rows={rows}
          onClose={() => setOpenHistoryDrawer(false)}
        />
      </Modal>
      <MenuDrawer
        open={openMenuDrawer}
        toggleMenuDrawer={toggleMenuDrawer}
        onHistoryAction={() => setOpenHistoryDrawer(true)}
      />

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

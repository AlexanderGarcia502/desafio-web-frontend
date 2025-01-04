import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Stack,
  Typography,
} from "@mui/material";
import ProductItem from "../../molecules/product-item";
import bananaImage from "../../../assets/banana.webp";
import { ICartDrawerProps } from "./interface";
import { IProductItem } from "../../molecules/product-item/interface";

export const CartDrawer = ({
  open,
  cartList,
  onClose,
  cartActions,
}: ICartDrawerProps) => {
  const { addToCart, removeFromCart, decrementQuantity, clearCart } =
    cartActions;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350 }} role="presentation" onKeyDown={onClose}>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width={1}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontFamily: "'Roboto', sans-serif",
                color: "primary.main",
                paddingRight: 2,
              }}
            >
              Mi Carrito
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ cursor: "pointer" }}
              spacing={1}
              onClick={clearCart}
            >
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{
                  color: "error.main",
                }}
              >
                Vaciar carrito
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Divider />
        <List component="nav">
          {cartList.map((product: IProductItem) => {
            const { idProduct, title, price, quantity } = product;
            return (
              <ProductItem
                key={idProduct}
                image={bananaImage}
                title={title}
                price={price}
                quantity={quantity}
                onIncrease={() =>
                  addToCart({
                    idProduct,
                    image: bananaImage,
                    title,
                    price,
                    quantity,
                  })
                }
                onDecrease={() => decrementQuantity(idProduct)}
                onRemove={() => removeFromCart(idProduct)}
              />
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

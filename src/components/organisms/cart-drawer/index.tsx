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
  totalPurchases,
  onSendOrder,
}: ICartDrawerProps) => {
  const { addToCart, removeFromCart, decrementQuantity, clearCart } =
    cartActions;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{ width: 350, height: "93%" }}
        role="presentation"
        onKeyDown={onClose}
      >
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
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
            height: "100%",
            overflow: "hidden",
          }}
        >
          <List
            component="nav"
            sx={{
              flex: 1,
              overflowY: "auto",
            }}
          >
            {cartList.map((product: IProductItem) => {
              const { idProduct, title, price, quantity, image } = product;
              return (
                <ProductItem
                  key={idProduct}
                  image={image}
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
          <Stack>
            <Stack
              paddingX={3}
              paddingY={1}
              direction="row"
              justifyContent="space-between"
            >
              <Typography variant="h6" color="text.primary">
                Total:
              </Typography>
              <Typography variant="h6" color="text.primary">
                {`Q ${totalPurchases ? totalPurchases : 0.0}`}
              </Typography>
            </Stack>
            <Stack
              onClick={onSendOrder}
              padding={1}
              marginX={2}
              marginBottom={2}
              alignItems="center"
              sx={{
                backgroundColor: "primary.main",
                cursor: "pointer",
                transition: "transform 0.1s ease, background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
                "&:active": {
                  transform: "scale(0.95)",
                  backgroundColor: "primary.light",
                },
              }}
            >
              <Typography fontWeight="bold" color="text.secondary">
                Enviar Orden
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
};

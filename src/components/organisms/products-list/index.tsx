import { Stack } from "@mui/material";
import ProductCard from "../../molecules/product-card";
import { IProductsListProps } from "./interface";

export default function ProductList({
  products,
  addToCart,
}: IProductsListProps) {
  return (
    <Stack
      justifyContent={{ xs: "space-around", md: "flex-start" }}
      flexDirection={"row"}
      flexWrap={"wrap"}
      rowGap={2}
      spacing={2}
      useFlexGap
    >
      {products.map((product) => {
        const { idProductos, nombre, precio, foto } = product;
        return (
          <ProductCard
            key={idProductos}
            foto={foto}
            nombre={nombre}
            precio={precio}
            onClick={() =>
              addToCart({
                idProduct: idProductos,
                title: nombre,
                price: precio,
                quantity: 1,
                image: foto,
              })
            }
          />
        );
      })}
    </Stack>
  );
}

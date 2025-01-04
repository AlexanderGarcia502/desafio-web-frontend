import { Stack } from "@mui/material";
import ProductCard from "../../molecules/product-card";
import { IProductsListProps } from "./interface";

export default function ProductList({ products }: IProductsListProps) {
  return (
    <Stack
      justifyContent={{ xs: "space-around", md: "flex-start" }}
      flexDirection={"row"}
      flexWrap={"wrap"}
      rowGap={2}
      spacing={2}
      useFlexGap
    >
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index}
            foto={product.foto}
            nombre={product.nombre}
            precio={product.precio}
            onClick={() => {}}
          />
        );
      })}
    </Stack>
  );
}

import { Stack } from "@mui/material";
import ProductCard from "../../molecules/product-card";
import { IProductsListProps } from "./interface";
import PaginationBar from "../../molecules/pagination";
import { Pagination } from "../../../interfaces/enums/pagination";
import { useState } from "react";

export default function ProductList({
  products,
  addToCart,
}: IProductsListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = Pagination.PageSize;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Stack>
      <Stack
        justifyContent={{ xs: "space-around", md: "flex-start" }}
        flexDirection={"row"}
        flexWrap={"wrap"}
        rowGap={2}
        spacing={2}
        useFlexGap
      >
        {currentItems.map((product) => {
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
      <PaginationBar
        count={Math.ceil(products.length / itemsPerPage)}
        currentPage={currentPage}
        onChange={handlePageChange}
        disabled={products.length === 0 ? true : false}
      />
    </Stack>
  );
}

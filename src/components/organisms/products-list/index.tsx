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
        display="flex"
        direction="row"
        flexWrap="wrap"
        gap={2}
        padding={2}
        justifyContent={"flex-start"}
      >
        {currentItems.map((product) => {
          const { idProductos, nombre, precio, foto, stock } = product;
          return (
            <ProductCard
              key={idProductos}
              foto={foto}
              nombre={nombre}
              stock={stock}
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

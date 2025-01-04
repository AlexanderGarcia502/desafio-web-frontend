import { useQuery } from "@tanstack/react-query";
import HomeTemplate from "../components/templates/home";
import { CategoryServices } from "../services/category-services";
import { ProductServices } from "../services/product-services";
import { useState } from "react";

const HomePage = () => {
  const categoryServices = new CategoryServices();
  const productServices = new ProductServices();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await categoryServices.getAllCategories();
      return response;
    },
  });

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await productServices.getAllProducts();
      return response;
    },
  });

  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const allCategories = [
    { idCategoriaProductos: 0, nombre: "Todos" },
    ...categories,
  ];

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  console.log("first", products);
  return (
    <HomeTemplate onClickCategory={() => {}}>
      <HomeTemplate.CategoryList
        categories={allCategories}
        onChangeCategory={() => {}}
      />
      <HomeTemplate.ProductList products={currentItems} />
      <HomeTemplate.Pagination
        count={Math.ceil(products.length / itemsPerPage)}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </HomeTemplate>
  );
};

export default HomePage;

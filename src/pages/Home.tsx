import { useQuery } from "@tanstack/react-query";
import HomeTemplate from "../components/templates/home";
import { CategoryServices } from "../services/category-services";
import { ProductServices } from "../services/product-services";
import { useState } from "react";
import { IProduct } from "../interfaces/models/product";
import { TCategoryInfo } from "../components/organisms/categories-bar/interface";

const HomePage = () => {
  const categoryServices = new CategoryServices();
  const productServices = new ProductServices();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const allCategories = [
    { idCategoriaProductos: 0, nombre: "Todos" },
    ...categories,
  ];

  const filteredProducts = products.filter((product: IProduct) => {
    const matchesCategory =
      selectedCategory === 0 ||
      product.categoriaProductos_idCategoriaProductos === selectedCategory;

    const matchesSearch = product.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleCategoryChange = ({ idCategoriaProductos }: TCategoryInfo) => {
    setSelectedCategory(idCategoriaProductos);
    setCurrentPage(1);
  };
  const handleSearchInputChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };
  return (
    <HomeTemplate
      onClickCategory={() => {}}
      onChangeSearchInput={handleSearchInputChange}
    >
      <HomeTemplate.CategoryList
        categories={allCategories}
        onChangeCategory={handleCategoryChange}
      />
      <HomeTemplate.ProductList products={currentItems} />
      <HomeTemplate.Pagination
        count={Math.ceil(products.length / itemsPerPage)}
        currentPage={currentPage}
        onChange={handlePageChange}
        disabled={filteredProducts.length === 0 ? true : false}
      />
    </HomeTemplate>
  );
};

export default HomePage;

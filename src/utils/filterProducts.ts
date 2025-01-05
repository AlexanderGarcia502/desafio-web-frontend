import { IProduct } from "../interfaces/models/product";

interface IFilterProductsProps {
  products: IProduct[];
  selectedCategory: number;
  searchTerm: string;
}

export const itMatchCategory = (
  selectedCategory: number,
  idCategory: number
) => {
  return selectedCategory === 0 || idCategory === selectedCategory;
};

export const itMatchWithProductName = (
  productName: string,
  searchTerm: string
) => {
  return productName.toLowerCase().includes(searchTerm.toLowerCase());
};

export const filterProducts = ({
  products,
  selectedCategory,
  searchTerm,
}: IFilterProductsProps) => {
  return products.filter((product: IProduct) => {
    const matchesCategory = itMatchCategory(
      selectedCategory,
      product.categoriaProductos_idCategoriaProductos
    );

    const matchesSearch = itMatchWithProductName(product.nombre, searchTerm);

    return matchesCategory && matchesSearch;
  });
};

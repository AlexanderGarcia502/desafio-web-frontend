import ProductsTemplate from "../components/templates/products";
import { useGetProducts } from "../hooks/useGetProducts";

const ProductsPage = () => {
  const { products } = useGetProducts()

  

  return (
    <ProductsTemplate
      rows={products}
      onAdd={() => {}}
      onDelete={() => {}}
      onEdit={() => {}}
    />
  );
};

export default ProductsPage;

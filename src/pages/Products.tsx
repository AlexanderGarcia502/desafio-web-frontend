import ProductsTemplate from "../components/templates/products";

const ProductsPage = () => {
  return (
    <ProductsTemplate
      rows={[{ idProductos: 1, nombre: "Product 1", precio: 1, foto: "" }]}
      onDelete={() => {}}
      onEdit={() => {}}
    />
  );
};

export default ProductsPage;

import { useMutation, useQuery } from "@tanstack/react-query";
import ProductsTemplate from "../components/templates/products";
import { IProduct } from "../interfaces/models/product";
import { ProductServices } from "../services/product-services";
import { useContext } from "react";
import { NotificationContext } from "../context/notification";

const ProductsPage = () => {
  const productServices = new ProductServices();
  const { setOpenNotification } = useContext(NotificationContext);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await productServices.getAllProducts();
      return response;
    },
  });

  const { mutate: deleteProduct } = useMutation({
    mutationFn: async ({ idProductos }: Pick<IProduct, "idProductos">) => {
      return await productServices.deleted({ idProductos });
    },
    onSuccess: (message) => {
      refetch();
      setOpenNotification(message, "success");
    },
    onError: (err) => {
      setOpenNotification(err.message, "error");
    },
  });

  const onDeleteProduct = ({ idProductos }: Pick<IProduct, "idProductos">) => {
    deleteProduct({ idProductos });
  };

  return (
    <ProductsTemplate
      rows={products}
      onAdd={() => {}}
      onDelete={onDeleteProduct}
      onEdit={() => {}}
    />
  );
};

export default ProductsPage;

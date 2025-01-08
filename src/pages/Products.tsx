import { useMutation, useQuery } from "@tanstack/react-query";
import ProductsTemplate from "../components/templates/products";
import { IProduct } from "../interfaces/models/product";
import { ProductServices } from "../services/product-services";
import { useContext } from "react";
import { NotificationContext } from "../context/notification";
import { CategoryServices } from "../services/category-services";
import { ICategory } from "../interfaces/models/category";

const ProductsPage = () => {
  const productServices = new ProductServices();
  const categoryServices = new CategoryServices();
  const { setOpenNotification } = useContext(NotificationContext);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await productServices.getAllProducts();
      return response;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await categoryServices.getAllCategories();
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

  const { mutate: editProduct } = useMutation({
    mutationFn: async (formData: FormData) => {
      return await productServices.update(formData);
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

  const onEditProduct = (
    props: Partial<Omit<IProduct, "idProductos" | "foto">> & {
      idProductos: number;
      foto: string | File | undefined;
    }
  ) => {
    const {
      foto,
      idProductos,
      categoriaProductos_idCategoriaProductos,
      estados_idEstados,
      nombre,
      marca,
      stock,
      precio,
    } = props;
    const formData = new FormData();
    formData.append("idProductos", String(idProductos));
    formData.append(
      "categoriaProductos_idCategoriaProductos",
      String(categoriaProductos_idCategoriaProductos)
    );
    formData.append("estados_idEstados", String(estados_idEstados));
    formData.append("nombre", String(nombre));
    formData.append("marca", String(marca));
    formData.append("stock", String(stock));
    formData.append("precio", String(precio));

    if (foto && foto instanceof File) {
      formData.append("foto", foto);
    }

    editProduct(formData);
  };

  const categoriesOption = categories.map((category: ICategory) => ({
    label: category.nombre,
    idCategoriaProductos: category.idCategoriaProductos,
  }));

  return (
    <ProductsTemplate
      categoriesOption={categoriesOption}
      rows={products}
      onAdd={() => {}}
      onDelete={onDeleteProduct}
      onEdit={onEditProduct}
    />
  );
};

export default ProductsPage;

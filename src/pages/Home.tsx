import { useMutation, useQuery } from "@tanstack/react-query";
import HomeTemplate from "../components/templates/home";
import { CategoryServices } from "../services/category-services";
import { ProductServices } from "../services/product-services";
import { useContext, useState } from "react";
import { TCategoryInfo } from "../components/organisms/categories-bar/interface";
import { useCart } from "../hooks/useCart";
import { OrderServices } from "../services/order-services";
import { ICreateOrderProps } from "../services/interfaces/order-interface";
import { NotificationContext } from "../context/notification";
import { getUser } from "../utils/getUser";
import { orderDetailsFromat } from "../utils/orderDetailsFromat";
import { IOrderFormInputs } from "../components/molecules/order-form-modal/interface";
import { filterProducts } from "../utils/filterProducts";

const HomePage = () => {
  const categoryServices = new CategoryServices();
  const productServices = new ProductServices();
  const orderServices = new OrderServices();

  const { setOpenNotification } = useContext(NotificationContext);
  const user = getUser();

  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    cart,
    addToCart,
    removeFromCart,
    decrementQuantity,
    clearCart,
    getTotal,
  } = useCart();

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

  const { mutate: createOrder } = useMutation({
    mutationFn: async ({
      usuarios_idUsuarios,
      nombre_completo,
      direccion,
      telefono,
      correo_electronico,
      fecha_entrega,
      productsDetails,
    }: ICreateOrderProps) => {
      return orderServices.create({
        usuarios_idUsuarios,
        nombre_completo,
        direccion,
        telefono,
        correo_electronico,
        fecha_entrega,
        productsDetails,
      });
    },
    onSuccess: (message) => {
      setOpenNotification(message, "success");
      clearCart();
    },
    onError: (err) => {
      setOpenNotification(err.message, "error");
    },
  });

  const allCategories = [
    { idCategoriaProductos: 0, nombre: "Todos" },
    ...categories,
  ];

  const filteredProducts = filterProducts({
    products,
    selectedCategory,
    searchTerm,
  });

  const handleCategoryChange = ({ idCategoriaProductos }: TCategoryInfo) => {
    setSelectedCategory(idCategoriaProductos);
  };

  const handleSearchInputChange = (value: string) => {
    setSearchTerm(value);
  };

  const onSendingOrder = ({ address }: IOrderFormInputs) => {
    const { idUsuarios, nombre_completo, telefono, correo_electronico } = user;
    const formatCartProducts = orderDetailsFromat(cart);

    createOrder({
      usuarios_idUsuarios: idUsuarios,
      nombre_completo,
      direccion: address,
      telefono,
      correo_electronico,
      fecha_entrega: new Date(),
      productsDetails: formatCartProducts,
    });
  };

  return (
    <HomeTemplate
      cartList={cart}
      totalPurchases={getTotal()}
      cartActions={{ addToCart, removeFromCart, decrementQuantity, clearCart }}
      onClickCategory={() => {}}
      onChangeSearchInput={handleSearchInputChange}
      onSendOrder={onSendingOrder}
    >
      <HomeTemplate.CategoryList
        categories={allCategories}
        onChangeCategory={handleCategoryChange}
      />

      <HomeTemplate.ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />
    </HomeTemplate>
  );
};

export default HomePage;

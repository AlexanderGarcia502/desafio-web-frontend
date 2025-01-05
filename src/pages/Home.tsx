import { useMutation, useQuery } from "@tanstack/react-query";
import HomeTemplate from "../components/templates/home";
import { CategoryServices } from "../services/category-services";
import { ProductServices } from "../services/product-services";
import { useContext, useState } from "react";
import { IProduct } from "../interfaces/models/product";
import { TCategoryInfo } from "../components/organisms/categories-bar/interface";
import { useCart } from "../hooks/useCart";
import { Pagination } from "../interfaces/enums/pagination";
import { OrderServices } from "../services/order-services";
import { ICreateOrderProps } from "../services/interfaces/order-interface";
import { NotificationContext } from "../context/notification";
import { getUser } from "../utils/getUser";
import { orderDetailsFromat } from "../utils/orderDetailsFromat";

const HomePage = () => {
  const categoryServices = new CategoryServices();
  const productServices = new ProductServices();
  const orderServices = new OrderServices();

  const { setOpenNotification } = useContext(NotificationContext);
  const user = getUser();

  const [currentPage, setCurrentPage] = useState<number>(1);
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

  const itemsPerPage = Pagination.PageSize;
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
    },
    onError: (err) => {
      setOpenNotification(err.message, "error");
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

  const onSendingOrder = () => {
    const { idUsuarios, nombre_completo, telefono, correo_electronico } = user;
    if (cart.length < 1) {
      return setOpenNotification("Tu carrito está vacío.", "error");
    }
    const formatCartProducts = orderDetailsFromat(cart);
    createOrder({
      usuarios_idUsuarios: idUsuarios,
      nombre_completo,
      direccion: "Colonia Jardines, Mixco",
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

      <HomeTemplate.ProductList products={currentItems} addToCart={addToCart} />
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

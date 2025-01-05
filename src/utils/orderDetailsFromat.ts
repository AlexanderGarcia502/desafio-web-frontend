import { IProductItem } from "../components/molecules/product-item/interface";

export const orderDetailsFromat = (orderItems: IProductItem[]) => {
  return orderItems.map((item) => ({
    productos_idProductos: item.idProduct,
    cantidad: item.quantity,
    precio: item.price,
  }));
};

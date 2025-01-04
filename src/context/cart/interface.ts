import { IProductItem } from "../../components/molecules/product-item/interface";

export interface CartContextType {
  cart: IProductItem[];
  addToCart: (product: IProductItem) => void;
  decrementQuantity: (idProduct: number) => void;
  removeFromCart: (idProduct: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

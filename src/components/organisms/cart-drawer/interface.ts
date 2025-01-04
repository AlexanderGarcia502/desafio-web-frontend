import { IProductItem } from "../../molecules/product-item/interface";

export interface ICartActions {
  addToCart: (product: IProductItem) => void;
  decrementQuantity: (idProduct: number) => void;
  removeFromCart: (idProduct: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export interface ICartDrawerProps {
  open: boolean;
  onClose: () => void;
  cartList: IProductItem[];
  cartActions: Omit<ICartActions, "getTotal">;
}

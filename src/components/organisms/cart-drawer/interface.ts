import { IProductItem } from "../../molecules/product-item/interface";

export interface ICartActions {
  addToCart: (product: IProductItem) => void;
  decrementQuantity: (idProduct: number) => void;
  removeFromCart: (idProduct: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export interface ICartDrawerProps {
  onClose: () => void;
  onSendOrder: () => void;
  open: boolean;
  cartList: IProductItem[];
  cartActions: Omit<ICartActions, "getTotal">;
  totalPurchases: number;
}

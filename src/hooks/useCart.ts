import { useContext } from "react";
import { CartContextType } from "../context/cart/interface";
import { CartContext } from "../context/cart";

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

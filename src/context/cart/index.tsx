import React, { createContext, useState, ReactNode } from "react";
import { CartContextType } from "./interface";
import { IProductItem } from "../../components/molecules/product-item/interface";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IProductItem[]>([]);

  const addToCart = (product: IProductItem) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(
        (item) => item.idProduct === product.idProduct
      );
      if (productInCart) {
        return prevCart.map((item) =>
          item.idProduct === product.idProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const decrementQuantity = (idProduct: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.idProduct === idProduct
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const removeFromCart = (idProduct: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.idProduct !== idProduct)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const formatDecimals = Math.round(total * 100) / 100;
    return formatDecimals;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decrementQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

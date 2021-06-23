import React, { createContext, useState } from 'react';

interface CartItemProps {
  color?: string;
  currency?: string;
  description?: string;
  id?: string;
  maxresURL?: string;
  price?: string;
  thumbnailURL?: string;
  size?: string;
  quantity?: string;
}

interface CartContextProps {
  cartItem?: CartItemProps;
  updateCartItem(newCartItem: CartItemProps): void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartProvider: React.FC = ({ children }) => {
  const [cartItem, setCartItem] = useState<CartItemProps>({});

  const updateCartItem = (newCartItem: CartItemProps): void => {
    setCartItem(newCartItem);
  };

  return (
    <CartContext.Provider value={{ cartItem, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

import React, { createContext, useState } from "react";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "utils/localStorage/localStorageAccess";

export const CartContext = createContext(0);
export const CartUpdateContext = createContext((num) => {
  num;
});

const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(
    getFromLocalStorage("cartItems") ? getFromLocalStorage("cartItems") : 0
  );

  const handleUpdateCart = (addedItems) => {
    const totalCount = cartCount + addedItems;
    setCartCount(totalCount);
    setLocalStorage("cartItems", totalCount);
  };

  return (
    <CartContext.Provider value={cartCount}>
      <CartUpdateContext.Provider value={handleUpdateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
};

export default CartContextProvider;

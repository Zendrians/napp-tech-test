import React, { createContext, useState } from "react";

export const CartContext = createContext(0);
export const CartUpdateContext = createContext((num) => {
  num;
});

const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(3);

  const handleUpdateCart = (addedItems) => {
    setCartCount(cartCount + addedItems);
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

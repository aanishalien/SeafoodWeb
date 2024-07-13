import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [all_product, setAllProduct] = useState([]);
  return (
    <ShopContext.Provider value={{ all_product, setAllProduct }}>
      {children}
    </ShopContext.Provider>
  );
};

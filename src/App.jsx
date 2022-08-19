import { createTheme, ThemeProvider } from "@mui/material";
import ProductDetailsContainer from "modules/productDetails/container/ProductDetailsContainer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "shared/context/CartContext";
import ProductListContainer from "./modules/productList/container/ProductListContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6900",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/details/:id" element={<ProductDetailsContainer />} />
        </Routes>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;

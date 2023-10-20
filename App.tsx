import React, { useState } from "react";
import TabRoutes from "@/routes/TabRoutes";
import { Theme } from "@/theme/theme";
import { ThemeProvider } from "styled-components";
import { CartContextProvider, CartItem } from "@/contexts/cartContext";

export default function App() {
  const [products, setProducts] = useState<CartItem[]>([]);

  return (
    <ThemeProvider theme={Theme}>
      <CartContextProvider
        value={{
          products,
          setProducts,
        }}
      >
        <TabRoutes />
      </CartContextProvider>
    </ThemeProvider>
  );
}

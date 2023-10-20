import { ProductType } from "@/screens/Home/mock";
import * as React from "react";

export interface CartItem extends ProductType {
  quantity: number;
}

interface CartContextType {
  products: CartItem[];
  setProducts: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = React.createContext<CartContextType>({
  products: [],
  setProducts: () => {},
});

export const CartContextProvider = CartContext.Provider;

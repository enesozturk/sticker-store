import { createContext } from "react";
import type { Product } from "../types/product";
import { ShoppingCartProps } from "../types/shoppingCart";

export interface IShoppingCartContext {
  shoppingCart: ShoppingCartProps;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product, removeAll?: boolean) => void;
  resetCart: () => void;
}

export const ShoppingCartContext = createContext<IShoppingCartContext | null>(
  null
);

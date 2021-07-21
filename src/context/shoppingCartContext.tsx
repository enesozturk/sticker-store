import { createContext } from "react";
import { ProductProps } from "../types/product";
import { ShoppingCartProps } from "../types/shoppingCart";

export interface IShoppingCartContext {
  shoppingCart: ShoppingCartProps;
  addProductToCart: (product: ProductProps) => void;
  removeProductFromCart: (product: ProductProps, removeAll?: boolean) => void;
}

export const ShoppingCartContext = createContext<IShoppingCartContext | null>(
  null
);

import { createContext } from "react";
import { ProductProps } from "../types/product";
import { ShoppingCartProps } from "../types/shoppingCart";

export interface IAppContextProps {
  shoppingCart: ShoppingCartProps;
  setProducts: (products: ProductProps[]) => void;
  addProductToCart: (product: ProductProps) => void;
  removeProductFromCart: (product: ProductProps) => void;
}

export const AppContext = createContext<IAppContextProps | null>(null);

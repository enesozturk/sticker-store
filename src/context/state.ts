import { createContext } from "react";
import { ProductProps } from "../types/product";
import { IShoppingCart } from "./shoppingCart";

export interface IAppContextProps {
  shoppingCart: IShoppingCart;
  setProducts: (products: ProductProps[]) => void;
  addProductToCart: (product: ProductProps) => void;
  removeProductToCart: (product: ProductProps) => void;
}

export const AppContext = createContext<IAppContextProps | null>(null);

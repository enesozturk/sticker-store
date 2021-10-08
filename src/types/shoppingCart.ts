import type { Product } from "./product";

export type ShoppingCartProduct = Product & {
  quantity: number;
};

export type ShoppingCartProps = {
  products: ShoppingCartProduct[];
};

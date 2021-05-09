import { ProductProps } from "./product";

export type ShoppingCartProductProps = ProductProps & {
  count: number;
};

export type ShoppingCartProps = {
  products: ShoppingCartProductProps[];
};

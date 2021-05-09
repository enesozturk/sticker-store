import { ProductProps } from "./product";

export type ShoppingCartProductProps = ProductProps & {
  quantity: number;
};

export type ShoppingCartProps = {
  products: ShoppingCartProductProps[];
};

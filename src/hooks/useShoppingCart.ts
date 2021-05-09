import { useEffect, useState } from "react";
import { ShoppingCartProductProps } from "../types/shoppingCart";
import { useAppContext } from "./useAppContext";

export const useShoppingCart = () => {
  const [productTotal, setProductTotal] = useState(0);
  const { shoppingCart } = useAppContext();

  const calculatePrice = (products: ShoppingCartProductProps[]) => {
    let totalPrice: number = 0;

    products.map((prd) => {
      totalPrice += prd.price * prd.quantity;
    });
    return totalPrice;
  };

  useEffect(() => {
    shoppingCart && setProductTotal(calculatePrice(shoppingCart.products));
  }, [shoppingCart]);

  return { productTotal };
};

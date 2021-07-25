import { useEffect, useState } from "react";
import { ShoppingCartProductProps } from "../types/shoppingCart";
import { useShoppingCardContext } from "./useShoppingCardContext";

export const useShoppingCart = () => {
  const [productTotal, setProductTotal] = useState(0);
  const { shoppingCart } = useShoppingCardContext();

  const calculatePrice = (products: ShoppingCartProductProps[]) => {
    let totalPrice: number = 0;

    products.map((prd) => {
      totalPrice += prd.price * prd.quantity;
    });
    return totalPrice;
  };

  const getCartItemsForOrder = () => {
    return shoppingCart.products.map((product) => {
      return {
        name: product.title,
        price: product.price * product.quantity,
      };
    });
  };

  useEffect(() => {
    shoppingCart && setProductTotal(calculatePrice(shoppingCart.products));
  }, [shoppingCart]);

  return { productTotal, getCartItemsForOrder };
};

import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { ShoppingCartProductProps } from "../../types/shoppingCart";
import { IconButton } from "../Button";
import ShoppingCart from "../Icon/ShoppingCart";

const CartButton = () => {
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
    setProductTotal(calculatePrice(shoppingCart.products));
  }, [shoppingCart]);

  return (
    <IconButton
      icon={<ShoppingCart />}
      text={productTotal ? `${productTotal}₺` : null}
      href="/cart"
    />
  );
};

export default CartButton;

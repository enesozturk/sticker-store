import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { ProductProps } from "../../types/product";
import { IconButton } from "../Button";
import ShoppingCart from "../Icon/ShoppingCart";

const CartButton = ({}) => {
  const [productTotal, setProductTotal] = useState(0);
  const { shoppingCart } = useAppContext();

  const calculatePrice = (products: ProductProps[]) => {
    let totalPrice: number = 0;
    console.log("total products", products);
    products.map((item, index) => {
      totalPrice += item.price;
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

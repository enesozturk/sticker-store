import { useShoppingCart } from "../../hooks";
import { IconButton } from "../Button";
import ShoppingCart from "../Icon/ShoppingCart";

const CartButton = () => {
  const { productTotal } = useShoppingCart();

  return (
    <IconButton
      icon={<ShoppingCart />}
      text={productTotal ? `${productTotal}₺` : null}
      href="/cart"
    />
  );
};

export default CartButton;

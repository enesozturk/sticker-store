import { useContext } from "react";
import { ShoppingCartContext } from "../context/shoppingCartContext";

export const useShoppingCardContext = () => {
  const context = useContext(ShoppingCartContext);

  if (context === null) {
    throw new Error(
      "Internal context cannot be null, please add 'Provider' to the root component."
    );
  }

  return context;
};

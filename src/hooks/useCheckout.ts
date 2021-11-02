import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  useAirtable,
  useCraftgate,
  useShoppingCardContext,
  useShoppingCart,
} from ".";

export const useCheckout = () => {
  const { createPayment } = useCraftgate();
  const { createRecord } = useAirtable();
  const { getCartItemsForOrder, productTotal } = useShoppingCart();
  const { resetCart } = useShoppingCardContext();
  const router = useRouter();

  useEffect(() => {}, []);

  const handleCreatePayment = () => {
    createPayment(getCartItemsForOrder()).then((response) => {
      if (response.ok) {
        createRecord("Order", [{ fields: { total_price: productTotal } }]).then(
          () => {
            resetCart();
            router.replace("/order-completed");
          }
        );
      }
    });
  };

  return { handleCreatePayment };
};

import { useRouter } from "next/router";

import {
  useAirtable,
  useCraftgate,
  useShoppingCardContext,
  useShoppingCart,
} from ".";
import { normalizeCardData, normalizeOrderRecord } from "../utils/normalize";

export const useCheckout = () => {
  const { createPayment } = useCraftgate();
  const { createRecord } = useAirtable();
  const { getCartItemsForOrder, productTotal } = useShoppingCart();
  const { resetCart } = useShoppingCardContext();
  const router = useRouter();

  const handleCreatePayment = ({ formData, onSuccess, onError }) => {
    const card = normalizeCardData(formData);
    const items = getCartItemsForOrder();
    const orderRecord = normalizeOrderRecord({
      data: formData,
      totalPrice: productTotal,
    });

    createPayment(items, card).then(async (response) => {
      if (response.ok) {
        createRecord("Order", [orderRecord]).then(() => {
          router.replace("/order-completed");
          resetCart();
          onSuccess();
        });
      } else {
        onError();
      }
    });
  };

  return { handleCreatePayment };
};

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

  const generateAddressString = (_formData) => {
    const { firstName, lastName, address, city, country, state, postalCode } =
      _formData;
    return `${firstName} ${lastName}, ${address}, Postal Code: ${postalCode}, State: ${state},  ${city} / ${country}`;
  };

  const handleCreatePayment = (formData) => {
    createPayment(getCartItemsForOrder()).then((response) => {
      if (response.ok) {
        createRecord("Order", [
          {
            fields: {
              total_price: productTotal,
              first_name: formData.firstName,
              last_name: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              address: generateAddressString(formData),
            },
          },
        ]).then(() => {
          resetCart();
          router.replace("/order-completed");
        });
      }
    });
  };

  return { handleCreatePayment };
};

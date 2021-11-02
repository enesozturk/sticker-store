import { useState } from "react";

import { useRouter } from "next/router";

import { Button } from "../src/components/Button";
import { CheckoutSection } from "../src/components/Checkout";
import { PageHeader } from "../src/components/Header";
import Input from "../src/components/Input";
import Page from "../src/components/Page";
import {
  useAirtable,
  useCraftgate,
  useShoppingCardContext,
  useShoppingCart,
} from "../src/hooks";

function Checkout({}) {
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { productTotal, getCartItemsForOrder } = useShoppingCart();
  const { resetCart } = useShoppingCardContext();
  const { createPayment } = useCraftgate();
  const { createRecord } = useAirtable();
  const router = useRouter();

  const handleCreatePayment = () => {
    setCheckoutLoading(true);
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

  return (
    <Page title="Checkout">
      <div className="flex flex-col w-full">
        <PageHeader
          rightTitle="Checkout"
          rightDescription="Complete your order with cridentials"
          leftTitle={`${productTotal}₺`}
          leftDescription="TOTAL"
        />
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <CheckoutSection title="Contact Information" seperator>
            <div className="checkout-email-row">
              <Input title="E-mail" name="email" type="email" />
            </div>
          </CheckoutSection>
          <CheckoutSection title="Shipping Information" seperator>
            <div className="checkout-default-row">
              <Input title="First Name" name="firstName" />
              <Input title="Last Name" name="lastName" />
            </div>
            <div className="checkout-default-row">
              <Input title="Phone Number" name="phoneNumber" type="phone" />
              <Input title="Company" name="company" />
            </div>
            <div className="checkout-default-row">
              <Input title="Address" name="address" />
            </div>
            <div className="checkout-default-row">
              <Input title="City" name="city" />
              <Input title="Country" name="country" />
            </div>
            <div className="checkout-default-row">
              <Input title="State / Province" />
              <Input title="Postal Code" type="number" />
            </div>
          </CheckoutSection>
          <CheckoutSection className="mb-24" title="Payment">
            <div className="checkout-default-row">
              <Input title="Card Number" type="number" />
            </div>
            <div className="checkout-default-row">
              <Input title="Card Holder Name" />
            </div>
            <div className="checkout-default-row">
              <Input title="Expiration Date (MM/YY)" type="number" />
              <Input title="CVV" type="number" />
            </div>
            <div className="w-full flex justify-end">
              <Button
                text="Complete Shopping"
                color="blue"
                className="w-full text-center mt-4"
                loading={checkoutLoading}
                onClick={handleCreatePayment}
              />
            </div>
          </CheckoutSection>
        </div>
      </div>
    </Page>
  );
}

export default Checkout;

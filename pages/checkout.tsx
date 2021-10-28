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
  const [section, setSection] = useState(0);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { productTotal, getCartItemsForOrder } = useShoppingCart();
  const { resetCart } = useShoppingCardContext();
  const { createPayment } = useCraftgate();
  const { createRecord } = useAirtable();
  const router = useRouter();

  const handleActivateSection = (sectionIndex: number) => {
    setSection(sectionIndex);
  };

  const handleCreatePayment = () => {
    setCheckoutLoading(true);
    createPayment(getCartItemsForOrder()).then((response) => {
      if (response.ok) {
        createRecord("Order", [{ fields: { total_price: productTotal } }]).then(
          () => {
            setCheckoutLoading(false);
            router.replace("/order-completed");
            resetCart();
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
          leftDescription="TOTAL AMOUNT"
        />
        <CheckoutSection
          onPress={handleActivateSection}
          step="1"
          title="Account"
          description="Checking out as a guest? You'll be able to save your details to create an account with us later."
          isOpen={section == 1}
          content={
            <div className="w-full flex flex-col xs:flex-row gap-2 sm:w-2/3 items-start xs:items-end">
              <Input placeholder="E-mail" />
              <Button
                text="Continue"
                color="gray"
                onClick={(e) => {
                  e.stopPropagation();
                  setSection(2);
                }}
              />
            </div>
          }
        />
        <CheckoutSection
          onPress={handleActivateSection}
          step="2"
          title="Shipping"
          description="Please enter a shipping address."
          isOpen={section == 2}
          content={
            <>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="T.C number" />
                <Input placeholder="Phone Number" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="Address" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="City" />
                <Input placeholder="Country" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="State" />
                <Input placeholder="Postal Code" />
              </div>
              <div className="w-full flex justify-end mb-4">
                <Button
                  text="Continue"
                  color="gray"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSection(3);
                  }}
                />
              </div>
            </>
          }
        />
        <CheckoutSection
          className="mb-24"
          onPress={handleActivateSection}
          step="3"
          title="Payment"
          description="Please select a payment method."
          isOpen={section == 3}
          content={
            <>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="Card Number" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="Card Holder Name" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
                <Input placeholder="Date" />
                <Input placeholder="CVV" />
              </div>
              <div className="w-full flex justify-end mb-4">
                <Button
                  text="Complete Shopping"
                  color="blue"
                  loading={checkoutLoading}
                  onClick={handleCreatePayment}
                />
              </div>
            </>
          }
        />
      </div>
    </Page>
  );
}

export default Checkout;

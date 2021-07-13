import { useState } from "react";

import { useRouter } from "next/router";

import { Button } from "../src/components/Button";
import { CheckoutSection } from "../src/components/Checkout";
import { PageHeader } from "../src/components/Header";
import Input from "../src/components/Input";
import Page from "../src/components/Page";
import { useCraftgate, useShoppingCart } from "../src/hooks";

function Checkout({}) {
  const [section, setSection] = useState(0);
  const { productTotal } = useShoppingCart();
  const { createPayment } = useCraftgate();
  const router = useRouter();

  const handleActivateSection = (sectionIndex: number) => {
    setSection(sectionIndex);
  };

  const handleCreatePayment = () => {
    createPayment([{ name: "iPhone 11", price: 10000 }])
      .then((resposne) => {
        console.log(resposne);
        router.replace("/order-completed");
      })
      .catch((error) => {
        throw Error(error);
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
            <div className="w-full flex flex-col xs:flex-row gap-2 w-full sm:w-2/3 items-start xs:items-end">
              <Input title="E-mail" />
              <Button
                text="Continue"
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
              <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
                <Input title="First Name" />
                <Input title="Last Name" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
                <Input title="Address" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
                <Input title="City" />
                <Input title="Country" />
              </div>
              <div className="w-full flex flex-col xs:flex-row gap-2 w-full items-start xs:items-end mb-4">
                <Input title="State" />
                <Input title="Postal Code" />
              </div>
              <Button
                text="Continue"
                onClick={(e) => {
                  e.stopPropagation();
                  setSection(3);
                }}
              />
            </>
          }
        />
        <CheckoutSection
          onPress={handleActivateSection}
          step="3"
          title="Payment"
          description="Please select a payment method."
          isOpen={section == 3}
          content={
            <>
              <Button text="Complete Shopping" onClick={handleCreatePayment} />
            </>
          }
        />
      </div>
    </Page>
  );
}

export default Checkout;

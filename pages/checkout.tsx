import { useState } from "react";

import { Button } from "../src/components/Button";
import { CheckoutSection } from "../src/components/Checkout";
import { PageHeader } from "../src/components/Header";
import Input from "../src/components/Input";
import Page from "../src/components/Page";
import { useCheckout, useShoppingCart } from "../src/hooks";
import { useForm } from "react-hook-form";

function Checkout({}) {
  const [checkoutLoading] = useState(false);
  const { productTotal } = useShoppingCart();
  const { handleCreatePayment } = useCheckout();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
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
        <form
          onSubmit={handleSubmit(submitForm)}
          className="bg-gray-50 rounded-xl p-8 mb-16"
        >
          <CheckoutSection title="Contact Information" seperator>
            <div className="checkout-email-row">
              <Input
                title="E-mail"
                type="email"
                error={errors.email}
                {...register("email", { required: true })}
              />
            </div>
          </CheckoutSection>
          <CheckoutSection title="Shipping Information" seperator>
            <div className="checkout-default-row">
              <Input
                title="First Name"
                error={errors.firstName}
                {...register("firstName", { required: true })}
              />
              <Input
                title="Last Name"
                error={errors.lastName}
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="checkout-default-row">
              <Input
                title="Phone Number"
                type="phone"
                error={errors.phoneNumber}
                {...register("phoneNumber", { required: true })}
              />
              <Input
                title="Company"
                error={errors.company}
                {...register("company", { required: false })}
              />
            </div>
            <div className="checkout-default-row">
              <Input
                title="Address"
                error={errors.address}
                {...register("address", { required: true })}
              />
            </div>
            <div className="checkout-default-row">
              <Input title="City" {...register("city", { required: true })} />
              <Input
                title="Country"
                error={errors.country}
                {...register("country", { required: false })}
              />
            </div>
            <div className="checkout-default-row">
              <Input
                title="State / Province"
                error={errors.state}
                {...register("state", { required: false })}
              />
              <Input
                title="Postal Code"
                type="number"
                error={errors.postalCode}
                {...register("postalCode", { required: false })}
              />
            </div>
          </CheckoutSection>
          <CheckoutSection className="mb-24" title="Payment">
            <div className="checkout-default-row">
              <Input
                title="Card Number"
                type="number"
                error={errors.cardNnumber}
                {...register("cardNnumber", { required: false })}
              />
            </div>
            <div className="checkout-default-row">
              <Input
                title="Card Holder Name"
                error={errors.cardHolderName}
                {...register("cardHolderName", { required: false })}
              />
            </div>
            <div className="checkout-default-row">
              <Input
                title="Expiration Date (MM/YY)"
                type="number"
                error={errors.expirationDate}
                {...register("expirationDate", { required: false })}
              />
              <Input
                title="CVV"
                type="number"
                error={errors.cvvNumber}
                {...register("cvvNumber", { required: false })}
              />
            </div>
            <div className="w-full flex justify-end">
              <Button
                text="Complete Shopping"
                color="blue"
                className="w-full text-center mt-4"
                loading={checkoutLoading}
                type="submit"
              />
            </div>
          </CheckoutSection>
        </form>
      </div>
    </Page>
  );
}

export default Checkout;

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
    handleCreatePayment(data);
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
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                title="E-mail"
                type="email"
                error={errors.email}
                {...register("email", { required: true })}
              />
            </div>
          </CheckoutSection>
          <CheckoutSection title="Shipping Information" seperator>
            <div className="checkout-input-contianer">
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
            <div className="checkout-input-contianer">
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
            <div className="checkout-input-contianer">
              <Input
                title="Address"
                error={errors.address}
                {...register("address", { required: true })}
              />
            </div>
            <div className="checkout-input-contianer">
              <Input title="City" {...register("city", { required: true })} />
              <Input
                title="Country"
                error={errors.country}
                {...register("country", { required: false })}
              />
            </div>
            <div className="checkout-input-contianer">
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
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                data-mask="(999)-999-9999"
                title="Card Number"
                error={errors.cardNnumber}
                {...register("cardNnumber", {
                  required: true,
                  pattern: {
                    value: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                    message: "Invalid card number",
                  },
                })}
              />
            </div>
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                title="Card Holder Name"
                error={errors.cardHolderName}
                {...register("cardHolderName", { required: true })}
              />
            </div>
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                title="Expiration Date (MM/YY)"
                error={errors.expirationDate}
                {...register("expireDate", { required: true })}
              />
              <Input
                title="CVV"
                type="number"
                error={errors.cvvNumber}
                {...register("cvc", { required: true, maxLength: 3 })}
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

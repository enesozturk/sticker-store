import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { Button } from "../src/components/Button";
import { CheckoutSection } from "../src/components/Checkout";
import { PageHeader } from "../src/components/Header";
import Input from "../src/components/Input";
import Page from "../src/components/Page";
import { useCheckout, useShoppingCart, usePaymentState } from "../src/hooks";

function Checkout({}) {
  const [paymentState, dispatch] = usePaymentState();

  const { t: translate } = useTranslation();
  const { productTotal } = useShoppingCart();
  const { handleCreatePayment } = useCheckout();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    dispatch({ type: "payment_loading" });
    if (!paymentState.paymentLoading) {
      handleCreatePayment({
        formData: data,
        onSuccess: () => {
          dispatch({ type: "payment_success" });
        },
        onError: () => {
          dispatch({ type: "payment_error" });
        },
      });
    }
  };

  return (
    <Page title="Checkout">
      <div className="flex flex-col w-full">
        <PageHeader
          rightTitle={translate("checkout.header.title")}
          rightDescription={translate("checkout.header.description")}
          leftTitle={`${productTotal}₺`}
          leftDescription={translate("checkout.header.total")}
        />
        <form
          onSubmit={handleSubmit(submitForm)}
          className="bg-gray-50 rounded-xl p-8 mb-16"
        >
          <CheckoutSection
            title={translate("checkout.form.contact.title")}
            seperator
          >
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                title={translate("checkout.form.contact.fields.email")}
                type="email"
                error={errors.email}
                {...register("email", { required: true })}
              />
            </div>
          </CheckoutSection>
          <CheckoutSection
            title={translate("checkout.form.shipping.title")}
            seperator
          >
            <div className="checkout-input-contianer">
              <Input
                title={translate("checkout.form.shipping.fields.first_name")}
                error={errors.firstName}
                {...register("firstName", { required: true })}
              />
              <Input
                title={translate("checkout.form.shipping.fields.last_name")}
                error={errors.lastName}
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="checkout-input-contianer">
              <Input
                title={translate("checkout.form.shipping.fields.phone_number")}
                type="phone"
                error={errors.phoneNumber}
                {...register("phoneNumber", { required: true })}
              />
              <Input
                title={translate("checkout.form.shipping.fields.company")}
                error={errors.company}
                {...register("company", { required: false })}
              />
            </div>
            <div className="checkout-input-contianer">
              <Input
                title={translate("checkout.form.shipping.fields.address")}
                error={errors.address}
                {...register("address", { required: true })}
              />
            </div>
            <div className="checkout-input-contianer">
              <Input
                title={translate("checkout.form.shipping.fields.city")}
                {...register("city", { required: true })}
              />
              <Input
                title={translate("checkout.form.shipping.fields.country")}
                error={errors.country}
                {...register("country", { required: false })}
              />
            </div>
            <div className="checkout-input-contianer">
              <Input
                title={translate("checkout.form.shipping.fields.state")}
                error={errors.state}
                {...register("state", { required: false })}
              />
              <Input
                title={translate("checkout.form.shipping.fields.postal_code")}
                type="number"
                error={errors.postalCode}
                {...register("postalCode", { required: false })}
              />
            </div>
          </CheckoutSection>
          <CheckoutSection
            className="mb-24"
            title={translate("checkout.form.payment.title")}
          >
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                title={translate("checkout.form.payment.fields.card_number")}
                error={errors.cardNumber}
                {...register("cardNumber", {
                  required: true,
                })}
              />
            </div>
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                title={translate(
                  "checkout.form.payment.fields.card_holder_name"
                )}
                error={errors.cardHolderName}
                {...register("cardHolderName", { required: true })}
              />
            </div>
            <div className="checkout-input-contianer sm:w-2/4">
              <Input
                title={translate(
                  "checkout.form.payment.fields.expiration_date"
                )}
                error={errors.expireDate}
                {...register("expireDate", { required: true })}
              />
              <Input
                title={translate("checkout.form.payment.fields.cvv")}
                type="number"
                error={errors.cvc}
                {...register("cvc", { required: true, maxLength: 3 })}
              />
            </div>
            {paymentState.paymentError && (
              <span className="text-red-600">Ödemede hata oldu</span>
            )}
            <div className="w-full flex justify-end">
              <Button
                text={translate("checkout.button")}
                color="blue"
                className="w-full text-center mt-4"
                loading={paymentState.paymentLoading}
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

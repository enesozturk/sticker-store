type CheckoutForm = {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  postalCode: number;
  cardHolderName: string;
  cardNumber: string;
  expireDate: string;
  cvc: string;
};

type OrderRecordProps = {
  data: CheckoutForm;
  totalPrice: number;
};

export const normalizeCardData = (formData: CheckoutForm) => {
  return {
    cardHolderName: formData.cardHolderName,
    cardNumber: formData.cardNumber.replace(/(\s)+/g, ""),
    expireYear: `20${formData.expireDate.replace(/(\s)+/g, "").split("/")[1]}`,
    expireMonth: formData.expireDate.replace(/(\s)+/g, "").split("/")[0],
    cvc: formData.cvc,
  };
};

export const normalizeAddressString = (formData: CheckoutForm) => {
  const { firstName, lastName, address, city, country, state, postalCode } =
    formData;
  return `${firstName} ${lastName}, ${address}, Postal Code: ${postalCode}, State: ${state},  ${city} / ${country}`;
};

export const normalizeOrderRecord = ({
  data,
  totalPrice,
}: OrderRecordProps) => {
  return {
    fields: {
      total_price: totalPrice,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      address: normalizeAddressString(data),
    },
  };
};

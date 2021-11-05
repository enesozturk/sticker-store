export const normalizeCardData = (data) => {
  return {
    cardHolderName: data.cardHolderName,
    cardNumber: data.cardNumber.replace(/(\s)+/g, ""),
    expireYear: `20${data.expireDate.replace(/(\s)+/g, "").split("/")[1]}`,
    expireMonth: data.expireDate.replace(/(\s)+/g, "").split("/")[0],
    cvc: data.cvc,
  };
};

export const normalizeAddressString = (_formData) => {
  const { firstName, lastName, address, city, country, state, postalCode } =
    _formData;
  return `${firstName} ${lastName}, ${address}, Postal Code: ${postalCode}, State: ${state},  ${city} / ${country}`;
};

export const normalizeOrderRecord = ({ data, totalPrice }) => {
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

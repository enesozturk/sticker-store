export const maskCardNumber = (value) => {
  const replacedValue = value ? value.replace(/[^0-9]/g, "") : "";
  return replacedValue
    ? replacedValue
        .match(/.{1,4}/g)
        .join(" ")
        .substr(0, 19)
    : "";
};

export const maskExpireDateNumber = (value) => {
  const replacedValue = value ? value.replace(/[^0-9]/g, "") : "";
  return replacedValue
    ? replacedValue
        .match(/.{1,2}/g)
        .join(" / ")
        .substr(0, 7)
    : "";
};

export const maskCVCNumber = (value) => {
  const replacedValue = value ? value.replace(/[^0-9]/g, "") : "";
  return replacedValue ? replacedValue.substr(0, 3) : "";
};

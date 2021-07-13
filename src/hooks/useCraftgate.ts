export const useCraftgate = () => {
  const createPayment = (items) => {
    return fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ items }),
    });
  };

  return { createPayment };
};

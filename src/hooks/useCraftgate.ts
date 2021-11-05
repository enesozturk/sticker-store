export const useCraftgate = () => {
  const createPayment = (items, card) => {
    return fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ items, card }),
    });
  };

  return { createPayment };
};

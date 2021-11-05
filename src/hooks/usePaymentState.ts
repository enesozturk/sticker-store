import { useReducer } from "react";

const initialState = {
  paymentLoading: false,
  paymentSuccess: false,
  paymentError: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "payment_error":
      return {
        paymentSuccess: false,
        paymentLoading: false,
        paymentError: true,
      };
    case "payment_loading":
      return {
        paymentError: false,
        paymentSuccess: false,
        paymentLoading: true,
      };
    case "payment_success":
      return {
        paymentError: false,
        paymentLoading: false,
        paymentSuccess: true,
      };
    default:
      return state;
  }
}

export const usePaymentState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

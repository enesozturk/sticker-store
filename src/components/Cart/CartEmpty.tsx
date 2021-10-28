import React from "react";

import { useRouter } from "next/router";

import { Button } from "../Button";

const CartEmpty = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 p-8 rounded-xl">
      <h1 className="text-8xl font-semibold	text-center pt-8">🛒</h1>
      <h1 className="text-4xl font-semibold	text-center pt-8">
        Your cart is empty.
      </h1>
      <p className="text-lg text-center pt-4 text-gray-500">
        Please add some products to your cart to proceed to checkout.
      </p>
      <Button
        className="text-gray-500 w-auto justify-center mt-8"
        onClick={() => {
          router.push("/");
        }}
        text="Go back to home"
      />
    </div>
  );
};

export default CartEmpty;

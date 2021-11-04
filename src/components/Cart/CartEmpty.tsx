import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Button } from "../Button";

const CartEmpty = () => {
  const { t: translate } = useTranslation();

  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 p-8 rounded-xl mb-64">
      <h1 className="text-8xl font-semibold	text-center pt-8">🛒</h1>
      <h1 className="text-4xl font-semibold	text-center pt-8">
        {translate("cart.empty.title")}
      </h1>
      <p className="text-lg text-center pt-4 text-gray-500">
        {translate("cart.empty.description")}
      </p>
      <Button
        className="text-gray-500 w-auto justify-center mt-8"
        onClick={() => {
          router.push("/");
        }}
        text={translate("cart.empty.button")}
      />
    </div>
  );
};

export default CartEmpty;

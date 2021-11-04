import Link from "next/link";
import { useTranslation } from "next-i18next";

import { useShoppingCart } from "../../hooks";

const CheckoutSummary = () => {
  const { t: translate } = useTranslation();
  const { productTotal } = useShoppingCart();
  const shippingPrice = 10;

  const total = productTotal + shippingPrice;

  return (
    <div className="bg-white rounded-2xl shadow flex flex-col px-6 py-4 w-full">
      <div className="flex justify-between">
        <span className="text-xl font-semibold">
          {translate("cart.checkout_summary.total")}
        </span>
        <span className="text-xl">{productTotal ? `${total}₺` : `-`}</span>
      </div>
      <div className="border border-gray-100 my-2"></div>
      <div className="flex flex-col mb-4">
        <div className="flex justify-between">
          <span className="font-normal text-gray-400 mb-2">
            {translate("cart.checkout_summary.subtotal")}
          </span>
          <span className="text-gray-400">{`${productTotal}₺`}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal text-gray-400 mb-2">
            {translate("cart.checkout_summary.shipping")}
          </span>
          <span className="text-gray-400">{`${shippingPrice}₺`}</span>
        </div>
      </div>

      <Link href="/checkout">
        <a className="px-4 py-2 bg-blue-100 text-blue-400 hover:bg-blue-200 text-center font-semibold rounded-xl mb-2 focus:outline-none focus:ring focus:border-blue-400">
          {translate("cart.checkout_summary.proceed_to_checkout")}
        </a>
      </Link>
    </div>
  );
};

export default CheckoutSummary;

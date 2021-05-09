import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { ShoppingCartProductProps } from "../../types/shoppingCart";

const CheckoutSummary = () => {
  const [productTotal, setProductTotal] = useState(0);
  const { shoppingCart } = useAppContext();

  const calculatePrice = (products: ShoppingCartProductProps[]) => {
    let totalPrice: number = 0;

    products.map((prd) => {
      totalPrice += prd.price * prd.quantity;
    });
    return totalPrice;
  };

  useEffect(() => {
    setProductTotal(calculatePrice(shoppingCart.products));
  }, [shoppingCart]);

  return (
    <div className="bg-white rounded-2xl shadow flex flex-col px-6 py-4 w-full">
      <div className="flex justify-between">
        <span className="text-xl font-semibold uppercase">Total</span>
        <span className="text-xl">
          {productTotal ? `${productTotal}₺` : `-`}
        </span>
      </div>
      <div className="border border-gray-100 my-2"></div>
      <div className="flex flex-col mb-4">
        <div className="flex justify-between">
          <span className="font-normal text-gray-400">Taxes</span>
          <span className="text-gray-400">10₺</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal text-gray-400">Product</span>
          <span className="text-gray-400">10₺</span>
        </div>
        <div className="flex justify-between">
          <span className="font-normal text-gray-400">Shipping</span>
          <span className="text-gray-400">10₺</span>
        </div>
      </div>
      <button className="px-4 py-2 bg-gray-200 text-gray-400 font-semibold rounded-xl mb-2 focus:outline-none focus:ring focus:border-blue-400">
        Use Promote Code
      </button>
      <Link href="/checkout">
        <a className="px-4 py-2 bg-blue-200 text-blue-400 text-center font-semibold rounded-xl mb-2 focus:outline-none focus:ring focus:border-blue-400">
          Proceed to Checkout
        </a>
      </Link>
    </div>
  );
};

export default CheckoutSummary;

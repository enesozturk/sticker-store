import { PageHeader } from "../src/components/Header";
import { ProductCartItem } from "../src/components/Product";
import { CheckoutSummary } from "../src/components/Checkout";

function Cart({}) {
  return (
    <div className="flex flex-col w-full">
      <PageHeader rightTitle="My Cart" rightSubtitle="2 products" />
      <div className="grid grid-cols-3 w-full mt-8 gap-2">
        <div className="col-start-1 col-end-4 sm:col-end-3">
          <ProductCartItem />
          <ProductCartItem />
          <ProductCartItem />
        </div>
        <div className="col-start-1 col-end-4 sm:col-start-3">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;

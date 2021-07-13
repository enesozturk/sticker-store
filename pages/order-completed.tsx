import { useRouter } from "next/router";

import Page from "../src/components/Page";
import { Button } from "../src/components/Button";

function OrderCompleted() {
  const router = useRouter();

  return (
    <Page title="Order Completed">
      <div className="flex flex-col items-center w-full bg-gray-100 p-8 rounded-xl">
        <h1 className="text-8xl font-semibold	text-center pt-8">🎉</h1>
        <h1 className="text-4xl font-semibold	text-center pt-8">
          Your order completed.
        </h1>
        <p className="text-lg text-center pt-4">
          We will send you the details via email and SMS to keep you posted
          about your order!
        </p>
        <Button
          className="bg-gray-200 text-gray-500 w-auto justify-center mt-8 hover:bg-gray-300 transition"
          onClick={() => {
            router.push("/");
          }}
          text="Go back to home"
        />
      </div>
    </Page>
  );
}

export default OrderCompleted;

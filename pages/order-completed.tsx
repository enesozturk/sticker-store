import { useRouter } from "next/router";

import Page from "../src/components/Page";
import { Button } from "../src/components/Button";

function OrderCompleted() {
  const router = useRouter();

  return (
    <Page title="Order Completed">
      <div className="flex flex-col w-full">
        <h1>Your order completed 🔥</h1>
        <Button
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

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { CardEmpty } from "../src/components/Cart";
import { PageHeader } from "../src/components/Header";
import { ProductCartItem } from "../src/components/Product";
import { CheckoutSummary } from "../src/components/Checkout";
import { useShoppingCardContext } from "../src/hooks/useShoppingCardContext";
import Page from "../src/components/Page";

function Cart() {
  const { t: translate } = useTranslation();
  const {
    shoppingCart: { products },
  } = useShoppingCardContext();

  const isEmpty = products?.length === 0;

  if (isEmpty)
    return (
      <Page title="Cart">
        <CardEmpty />
      </Page>
    );

  return (
    <Page title="Cart">
      <div className="flex flex-col w-full mb-64">
        <PageHeader
          rightTitle={translate("cart.header.title")}
          rightSubtitle={`${products.length} ${translate(
            "cart.header.products"
          )}`}
        />
        <div className="grid grid-cols-3 w-full mt-8 gap-2">
          <div className="col-start-1 col-end-4 sm:col-end-3">
            {products.map((_product, index) => (
              <ProductCartItem key={index} item={_product} />
            ))}
          </div>
          <div className="col-start-1 col-end-4 sm:col-start-3">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Cart;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

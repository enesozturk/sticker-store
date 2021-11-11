import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Page from "../../src/components/Page";
import ProductDetailCard from "../../src/components/ProductDetailCard";
import { getRecord } from "../../src/utils/airtable";

function Sticker({ ...props }) {
  const { product } = props;

  return (
    <Page title={product.title}>
      <ProductDetailCard item={product} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, locale } = context;
  // @ts-ignore
  const product = await getRecord("Product", params.id);

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Sticker;

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Page from "../../src/components/Page";
import ProductDetailCard from "../../src/components/ProductDetailCard";
import { getRecord, getRecords } from "../../src/utils/airtable";

function Sticker({ ...props }) {
  const { product } = props;

  return (
    <Page title={product.title}>
      <ProductDetailCard item={product} />
    </Page>
  );
}

export async function getStaticPaths() {
  const products = await getRecords("Product");
  const paths = products?.map((product) => {
    return { params: { id: product.id.toString() } };
  });
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params, locale }) {
  const product = await getRecord("Product", params.id);

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 3600,
  };
}

export default Sticker;

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Page from "../src/components/Page";

import { ProductCard } from "../src/components/Product";
import Section from "../src/components/Section";
import { Product } from "../src/types/product";
import { getRecords } from "../src/utils/airtable";

export default function Home({ ...props }) {
  const { products } = props;

  return (
    <Page title="Sticker Store">
      <div className="flex flex-col w-full">
        <Section
          title="Sticker Store"
          description="Find the best stickers and make you environment fun"
        />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-1 sm:gap-x-4 w-full mb-8">
          {products?.map((item: Product, index: number) => {
            return <ProductCard key={index} item={item} />;
          })}
        </div>
      </div>
    </Page>
  );
}

export async function getStaticProps({ locale }) {
  const products = await getRecords("Product");

  return {
    props: {
      products,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 3600,
  };
}

import Page from "../src/components/Page";

import { ProductCard } from "../src/components/Product";
import { getRecords } from "../src/utils/airtable";

export default function Home({ ...props }) {
  const { products } = props;

  return (
    <Page title="Sticker Store">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-1 sm:gap-x-4 w-full">
        {products?.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const products = await getRecords("Product");

  return { props: { products }, revalidate: 3600 };
}

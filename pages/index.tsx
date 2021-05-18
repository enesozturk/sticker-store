import Head from "next/head";

import { ProductCard } from "../src/components/Product";
import { getProducts } from "../src/utils/api";

export default function Home({ ...props }) {
  const { products } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-1 sm:gap-x-4 w-full">
        {products?.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const products = await getProducts();

  return { props: { products }, revalidate: 1000 };
}

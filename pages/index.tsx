import Head from "next/head";

import { ProductCard } from "../components/Product";

export default function Home({ ...props }) {
  const { products } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-1 sm:gap-x-4 w-full">
        {products?.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
    </>
  );
}

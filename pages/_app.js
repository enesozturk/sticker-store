import "../src/styles/globals.css";

import App from "next/app";

import { Header } from "../src/components/Header";
import { getCategories, getProducts } from "../src/utils/api";

import { ShoppingCartProvider } from "../src/context/providers";

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Header />
      <div className="mx-auto max-w-4xl flex justify-between items-center px-2 pt-8">
        <Component {...pageProps} />
      </div>
    </ShoppingCartProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const categories = await getCategories();
  const products = await getProducts();
  return {
    ...appProps,
    pageProps: { categories, products, path: ctx.pathname },
  };
};

export default MyApp;

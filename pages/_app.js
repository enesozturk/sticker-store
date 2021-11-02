import "../src/styles/globals.css";

import App from "next/app";

import { Header } from "../src/components/Header";
import Footer from "../src/components/Footer";

import { ShoppingCartProvider } from "../src/context/providers";

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Header />
      <div className="mx-auto max-w-4xl flex justify-between items-center px-2 pt-8">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ShoppingCartProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return {
    ...appProps,
    pageProps: { path: ctx.pathname },
  };
};

export default MyApp;

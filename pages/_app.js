import "../src/styles/globals.css";

import App from "next/app";

import { Header } from "../src/components/Header";

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

export default MyApp;

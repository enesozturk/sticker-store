import "../src/styles/globals.css";

import App from "next/app";

import { Header } from "../src/components/Header";
import { getCategories, getProducts } from "../src/utils/api";

import { AppContext } from "../src/context";
import { useCallback, useMemo, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    shoppingCart: {
      products: [],
    },
  });

  const removeProductToCart = useCallback((_product) => {
    const products = state.shoppingCart.products.map(
      (product) => product != _product
    );
    setState({
      shoppingCart: {
        products,
      },
    });
  }, []);

  const addProductToCart = useCallback((_product) => {
    const products = state.shoppingCart.products;
    setState({
      shoppingCart: {
        products: [...products, _product],
      },
    });
  }, []);

  const appContextVariables = useMemo(
    () => ({
      ...state,
      addProductToCart,
      removeProductToCart,
    }),
    [state]
  );

  return (
    <AppContext.Provider value={appContextVariables}>
      <Header />
      <div className="mx-auto max-w-4xl flex justify-between items-center px-2 pt-8">
        <Component {...pageProps} />
      </div>
    </AppContext.Provider>
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

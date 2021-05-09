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

  const removeProductFromCart = useCallback(
    (_product) => {
      let products = state.shoppingCart.products;

      const productInCart = products.find((_prd) => _prd.id === _product.id);
      if (productInCart) {
        if (productInCart.count > 1)
          setState({
            shoppingCart: {
              products: state.shoppingCart.products.map((_prd) => {
                if (_prd.id === productInCart.id) {
                  return {
                    ...productInCart,
                    count: productInCart.count - 1,
                  };
                } else return _prd;
              }),
            },
          });
        else {
          setState({
            shoppingCart: {
              products: products.filter((_prd) => _prd.id !== _product.id),
            },
          });
        }
      }
    },
    [state]
  );

  const addProductToCart = useCallback(
    (_product) => {
      let products = state.shoppingCart.products;

      const productInCart = products.find((_prd) => _prd.id === _product.id);
      if (productInCart) {
        setState({
          shoppingCart: {
            products: state.shoppingCart.products.map((_prd) => {
              if (_prd.id === productInCart.id) {
                return {
                  ...productInCart,
                  count: productInCart.count + 1,
                };
              } else return _prd;
            }),
          },
        });
      } else {
        setState({
          shoppingCart: {
            products: [...products, { ..._product, count: 1 }],
          },
        });
      }
    },
    [state]
  );

  const appContextVariables = useMemo(
    () => ({
      ...state,
      addProductToCart,
      removeProductFromCart,
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

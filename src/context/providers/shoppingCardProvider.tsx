import { useEffect, useReducer } from "react";
import {
  ADD_PRODUCT,
  INITIALIZE_SHOPPING_CART,
  REMOVE_PRODUCT,
  shoppingCartReducer,
} from "../reducers/shoppingCartReducer";
import { ShoppingCartContext } from "../shoppingCartContext";

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    shoppingCart: {
      products: [],
    },
  });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProductFromCart = (product, removeAll) => {
    dispatch({ type: REMOVE_PRODUCT, product, removeAll });
  };

  const initializeShoppingCart = () => {
    dispatch({ type: INITIALIZE_SHOPPING_CART });
  };

  useEffect(() => {
    initializeShoppingCart();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        ...state,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

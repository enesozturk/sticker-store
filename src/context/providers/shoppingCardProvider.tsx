import { useReducer } from "react";
import {
  ADD_PRODUCT,
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

  const removeProductFromCart = (product) => {
    dispatch({ type: REMOVE_PRODUCT, product });
  };

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

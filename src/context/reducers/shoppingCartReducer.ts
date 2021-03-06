import { SHOPPING_CART_LIST } from "../../constants/storageKeys";
import { readStorage, writeStorage } from "../../utils/storage";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RESET_CART = "RESET_CART";
export const INITIALIZE_SHOPPING_CART = "INITIALIZE_SHOPPING_CART";

const initializeCart = () => {
  const shoppingCartFromStorage = readStorage(SHOPPING_CART_LIST);
  return shoppingCartFromStorage || { shoppingCart: { products: [] } };
};

const addProductToCart = (product, state) => {
  let products = [...state.shoppingCart.products];

  const productIndex = products.findIndex((item) => item.id === product.id);
  if (productIndex < 0) products.push({ ...product, quantity: 1 });
  else {
    let updatedProduct = { ...products[productIndex] };
    updatedProduct.quantity++;
    products[productIndex] = updatedProduct;
  }

  writeStorage(SHOPPING_CART_LIST, { shoppingCart: { products } });
  return { ...state, shoppingCart: { products } };
};

const removeProductFromCart = (product, removeAll, state) => {
  const products = [...state.shoppingCart.products];
  const productIndex = products.findIndex((item) => item.id === product.id);

  if (removeAll) {
    products.splice(productIndex, 1);
  } else {
    const updatedItem = {
      ...products[productIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      products.splice(productIndex, 1);
    } else {
      products[productIndex] = updatedItem;
    }
  }

  writeStorage(SHOPPING_CART_LIST, { shoppingCart: { products } });
  return { ...state, shoppingCart: { products } };
};

export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_SHOPPING_CART:
      return initializeCart();
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.product, action.removeAll, state);
    case RESET_CART:
      return { shoppingCart: { products: [] } };
    default:
      return state;
  }
};

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, state) => {
  let products = [...state.shoppingCart.products];

  const productIndex = products.findIndex((item) => item.id === product.id);
  if (productIndex < 0) products.push({ ...product, quantity: 1 });
  else {
    let updatedProduct = { ...products[productIndex] };
    updatedProduct.quantity++;
    products[productIndex] = updatedProduct;
  }

  return { ...state, shoppingCart: { products } };
};

const removeProductFromCart = (product, state) => {
  const products = [...state.shoppingCart.products];
  const productIndex = products.findIndex((item) => item.id === product.id);

  const updatedItem = {
    ...products[productIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    products.splice(productIndex, 1);
  } else {
    products[productIndex] = updatedItem;
  }
  return { ...state, shoppingCart: { products } };
};

export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.product, state);
    default:
      return state;
  }
};

import { SHOPPING_CART_LIST } from "../constants/storageKeys";
import type { Product } from "../types/product";
import { ShoppingCartProps } from "../types/shoppingCart";

type StorageData =
  | { shoppingCart: ShoppingCartProps }
  | Product
  | Product[]
  | null;

export function writeStorage(key: string, data: StorageData) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}

export function readStorage(key: string) {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data);
}

export function updateShoppingCard(products: Product[]) {
  writeStorage(SHOPPING_CART_LIST, products);
}

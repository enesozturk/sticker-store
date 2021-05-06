import { SHOPPING_CART_LIST } from "../constants/storageKeys";
import { ProductProps } from "../types/product";

type StorageData = ProductProps | ProductProps[] | null;

export function writeStorage(key: string, data: StorageData) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}

export function readStorage(key: string) {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data);
}

export function updateShoppingCard(products: ProductProps[]) {
  writeStorage(SHOPPING_CART_LIST, products);
}

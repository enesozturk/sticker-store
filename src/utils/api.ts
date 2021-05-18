import {
  normalizeDatabaseResponse,
  normalizePageResponse,
} from "./normalizeNotion";

export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_NOTION_API_URL}/${path}`;
}

export async function fetchAPI(path, method = "GET") {
  const requestUrl = getStrapiURL(path);

  const response = await fetch(requestUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_SECRET_KEY}`,
    },
  });

  const data = await response.json();
  return data;
}

export async function getProducts() {
  const products = await fetchAPI(
    `databases/${process.env.NEXT_PUBLIC_NOTION_API_DB_KEY}/query`,
    "POST"
  );
  const normalizedProducts = normalizeDatabaseResponse(products);
  return normalizedProducts;
}

export async function getProduct(pageId) {
  const product = await fetchAPI(`pages/${pageId}`);
  const normalizedProduct = normalizePageResponse(product);
  return normalizedProduct;
}

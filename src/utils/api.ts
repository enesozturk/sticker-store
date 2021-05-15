export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_NOTION_API_DB_URL}/${path}`;
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

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCategory(slug) {
  const category = await fetchAPI(`/categories${slug}`);
  return category;
}

export async function getProducts() {
  const products = await fetchAPI("query", "POST");
  return products;
}

export async function getProduct(slug) {
  const product = await fetchAPI(`/products/${slug}`);
  return product;
}

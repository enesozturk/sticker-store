export function getStrapiURL(path) {
  return `${
    process.env.NODE_ENV == "development"
      ? "http://localhost:1337"
      : process.env.NEXT_PUBLIC_STRAPI_API_URL
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
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
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const product = await fetchAPI(`/products/${slug}`);
  return product;
}

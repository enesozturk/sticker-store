import { NotionDatabaseResponse, NotionRowData } from "../types/notion";

const normalizePageDetails = (details: NotionRowData) => {
  return {
    id: details.id,
    title: details.properties["title"]?.title?.[0]?.plain_text,
    image: details.properties["image"]?.files?.[0]?.name,
    price: details.properties["price"]?.number,
  };
};

export const normalizeDatabaseResponse = (data: NotionDatabaseResponse) => {
  let normalizedProducts = [];

  data.results?.map((item) => {
    const _product = normalizePageDetails(item);
    normalizedProducts.push(_product);
  });

  return normalizedProducts;
};

export const normalizePageResponse = (data: NotionRowData) => {
  return normalizePageDetails(data);
};

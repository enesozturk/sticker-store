import { useEffect, useState } from "react";
import { NotionDatabaseResponse } from "../types/notion";

export const useNotionData = (data: NotionDatabaseResponse) => {
  const [normalizedData, setNormalizedData] = useState([]);

  useEffect(() => {
    let products = [];
    data.results?.map((item) => {
      const _product = {
        id: item.id,
        title: item.properties["title"]?.title?.[0].plain_text,
        image: item.properties["image"]?.files?.[0].name,
        price: item.properties["price"]?.number,
      };
      products.push(_product);
    });
    setNormalizedData(products);
  }, [data]);

  return { normalizedData };
};

import { useEffect, useState } from "react";

import { readStorage, storageKeys, writeStorage } from "../utils/storage";

export const useLikes = ({ productId }) => {
  const [liked, setLiked] = useState(false);

  const isLiked = (productId: string) => {
    const likes = readStorage(storageKeys.ss_keys);
    return likes && likes.includes(productId);
  };

  const like = async (productId: string) => {
    if (!isLiked(productId)) {
      const likes = readStorage(storageKeys.ss_keys) || [];
      writeStorage(storageKeys.ss_keys, [...likes, productId]);
    }

    return fetch("/api/likes", {
      method: "POST",
      body: JSON.stringify({
        productId,
      }),
    });
  };

  const unlike = async (productId: string) => {
    if (isLiked(productId)) {
      const likes = readStorage(storageKeys.ss_keys) || [];
      writeStorage(storageKeys.ss_keys, [
        ...likes.filter((id) => id !== productId),
      ]);
    }

    return fetch("/api/likes", {
      method: "DELETE",
      body: JSON.stringify({
        productId,
      }),
    });
  };

  const handleLikeProduct = () => {
    setLiked(!liked);
    if (!liked) like(productId);
    else unlike(productId);
  };

  useEffect(() => {
    if (isLiked(productId)) setLiked(true);
  }, []);

  return { liked, handleLikeProduct };
};

import { useEffect, useState } from "react";

import { readStorage, writeStorage } from "../utils/storage";
import { LIKES } from "../constants/storageKeys";

export const useLikes = ({ productId }) => {
  const [liked, setLiked] = useState(false);

  const isLiked = (productId: string) => {
    const likes = readStorage(LIKES);
    return likes && likes.includes(productId);
  };

  const like = async (productId: string) => {
    if (!isLiked(productId)) {
      const likes = readStorage(LIKES) || [];
      writeStorage(LIKES, [...likes, productId]);
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
      const likes = readStorage(LIKES) || [];
      writeStorage(LIKES, [...likes.filter((id) => id !== productId)]);
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

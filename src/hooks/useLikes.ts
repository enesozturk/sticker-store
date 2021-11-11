import { useEffect, useState } from "react";

import { readStorage, writeStorage } from "../utils/storage";

export const useLikes = ({ productId }) => {
  const [liked, setLiked] = useState(false);

  const isLiked = (productId: string) => {
    const likes = readStorage("likes");
    return likes.includes(productId);
  };

  const like = async (productId: string) => {
    return fetch("/api/likes", {
      method: "POST",
      body: JSON.stringify({
        productId,
      }),
    }).then((response) => {
      if (response.ok) {
        if (!isLiked(productId)) {
          const likes = readStorage("likes");
          writeStorage("likes", [...likes, productId]);
        }
      }
    });
  };

  const unlike = async (productId: string) => {
    return fetch("/api/likes", {
      method: "DELETE",
      body: JSON.stringify({
        productId,
      }),
    }).then((response) => {
      if (response.ok) {
        if (isLiked(productId)) {
          const likes = readStorage("likes");
          writeStorage("likes", [...likes.filter((id) => id !== productId)]);
        }
      }
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

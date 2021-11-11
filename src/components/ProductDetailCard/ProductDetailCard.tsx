import { useTranslation } from "next-i18next";

import HeartIcon from "../Icon/HeartIcon";
import { Button, IconButton, TypeButton } from "../Button";
import { useShoppingCardContext } from "../../hooks/useShoppingCardContext";
import Image from "../Image";
import { useLikes } from "../../hooks";

const ProductCard = ({ item, likeCount = 0 }) => {
  const { t: translate } = useTranslation();
  const { addProductToCart } = useShoppingCardContext();
  // const { liked, handleLikeProduct } = useLikes({ productId: item.id });

  const handleAddProductToCart = () => {
    addProductToCart(item);
  };

  return (
    <div className="rounded-2xl bg-white flex flex-col sm:flex-row w-full shadow overflow-hidden w-full mb-64">
      <div className="flex-1 p-8 flex justify-center items-center">
        <Image src={item.image} size={200} className="h-48" />
      </div>
      <div className="flex-1 flex flex-col items-start bg-gray-100 p-8">
        <span className="text-2xl font-semibold mb-4">{item.title}</span>
        <span className="text-gray-400 mb-4">{item.description}</span>
        <div className="px-4 py-2 bg-gray-200 rounded-lg mb-8">
          <span className="text-2xl text-gray-600 font-semibold">
            ₺{item.price}
          </span>
        </div>
        <span className="font-medium text-gray-400 mb-1">Type</span>
        <div className="flex gap-1 mb-8">
          <TypeButton text="Normal" description="Standart material" />
          <TypeButton text="Bold" description="Double protection" isActive />
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleAddProductToCart}
            text={translate("product.details.add_to_cart")}
          />
          {/* <IconButton
            icon={
              <HeartIcon
                className={`${liked ? "fill-red" : "fill-current"} ${
                  liked ? "stroke-red" : "stroke-gray"
                }`}
              />
            }
            onClick={handleLikeProduct}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

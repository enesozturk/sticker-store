import HeartIcon from "../Icon/HeartIcon";
import { Button, IconButton, TypeButton } from "../Button";
import { useAppContext } from "../../hooks/useAppContext";
import Image from "../Image";

const ProductCard = ({ item }) => {
  const { addProductToCart } = useAppContext();

  const handleAddProductToCart = () => {
    addProductToCart(item);
  };

  return (
    <div className="rounded-2xl bg-white flex flex-col sm:flex-row w-full shadow overflow-hidden w-full  mb-4">
      <div className="flex-1 p-8 flex justify-center items-center">
        {item.image && <Image src={item.image} size={200} className="h-48" />}
      </div>
      <div className="flex-1 flex flex-col items-start bg-gray-100 p-8">
        <span className="text-2xl font-semibold mb-4">{item.title}</span>
        <span className="text-gray-400 mb-4">{item.description}</span>
        <div className="px-4 py-2 bg-gray-200 rounded-lg mb-4">
          <span className="text-2xl text-gray-600 font-semibold">
            ₺{item.price}
          </span>
        </div>
        <span className="font-semibold text-gray-400 mb-1">Type</span>
        <div className="flex gap-1 mb-4">
          <TypeButton text="Standart" />
          <TypeButton text="Bold" isActive />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleAddProductToCart} text="Add to Cart" />
          <IconButton icon={<HeartIcon />} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

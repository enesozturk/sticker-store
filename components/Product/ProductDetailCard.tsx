import HeartIcon from "../Icon/HeartIcon";
import { Button, IconButton, TypeButton } from "../Button";

const ProductCard = () => {
  return (
    <div className="rounded-2xl bg-white flex flex-col sm:flex-row w-full shadow overflow-hidden w-full  mb-4">
      <div className="flex-1 p-8 flex justify-center items-center">
        <img className="h-48" src="/images/docker.png" />
      </div>
      <div className="flex-1 flex flex-col items-start bg-gray-100 p-8">
        <span className="text-2xl font-semibold mb-4">Docker Sticker</span>
        <span className="text-gray-400 mb-4">
          Docker helps developers bring their ideas to life by conquering the
          complexity of app development.
        </span>
        <div className="px-4 py-2 bg-gray-200 rounded-lg mb-4">
          <span className="text-2xl text-gray-600 font-semibold">10₺</span>
        </div>
        <span className="font-semibold text-gray-400 mb-1">Type</span>
        <div className="flex gap-1 mb-4">
          <TypeButton text="Standart" />
          <TypeButton text="Bold" isActive />
        </div>
        <div className="flex gap-2">
          <Button text="Add to Cart" />
          <IconButton icon={<HeartIcon />} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import Link from "next/link";

import { ProductProps } from "../../types/product";
import Image from "../../components/Image";

type ProductCardProps = {
  item: ProductProps;
  isFirst?: boolean;
  isLast?: boolean;
};

const ProductCard = ({ item, isFirst, isLast }: ProductCardProps) => {
  return (
    <Link href={`/product/${item.id}`}>
      <a
        className={`flex flex-col rounded-2xl bg-white overflow-hidden shadow mb-4 w-full hover:bg-gray-100 hover:cursor-pointer ${
          isFirst
            ? "justify-self-start"
            : isLast
            ? "justify-self-end"
            : "justify-self-center"
        }`}
      >
        <div className="flex justify-center items-center">
          <Image src={item.image} size={200} />
        </div>
        <div className="flex flex-col bg-gray-100 p-4">
          <span className="font-semibold">{item.title}</span>
          <span className="font-medium text-gray-400">₺{item.price}</span>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;

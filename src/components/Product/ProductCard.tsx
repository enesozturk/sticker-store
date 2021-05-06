import Link from "next/link";
import Image from "next/image";

type ProductProps = {
  id: number;
  title: string;
  price: string;
};

type ProductCardProps = {
  item: ProductProps;
  isFirst?: boolean;
  isLast?: boolean;
};

const ProductCard = ({ item, isFirst, isLast }: ProductCardProps) => {
  const image = item.image?.[0].url;
  const imageLoader = ({ src }) => {
    return `http://localhost:1337${src}`;
  };

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
          <Image
            loader={imageLoader}
            src={image}
            alt="product image"
            width={200}
            height={200}
          />
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

import Link from "next/link";

type ProductCardProps = {
  isFirst?: boolean;
  isLast?: boolean;
};

const ProductCard = ({ isFirst, isLast }: ProductCardProps) => {
  return (
    <Link href="/sticker/1">
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
          <img src="/images/docker.png" />
        </div>
        <div className="flex flex-col bg-gray-100 p-4">
          <span className="font-semibold">Docker Sticker</span>
          <span className="font-medium text-gray-400">10₺</span>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;

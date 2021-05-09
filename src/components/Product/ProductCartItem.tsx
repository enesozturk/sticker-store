import { useAppContext } from "../../hooks/useAppContext";
import { ShoppingCartProductProps } from "../../types/shoppingCart";
import { IconButton } from "../Button";
import { TrashIcon, MinusIcon, PlusIcon } from "../Icon";
import Image from "../Image";

type ProductCartItemProps = {
  item: ShoppingCartProductProps;
};

const ProductCartItem = ({ item }: ProductCartItemProps) => {
  const { removeProductFromCart, addProductToCart } = useAppContext();
  const image = item.image[0]?.url;

  const handleAddProductToCart = () => {
    addProductToCart(item);
  };

  const handleRemoveProductFromCart = () => {
    removeProductFromCart(item);
  };

  return (
    <div className="rounded-2xl bg-white flex flex-col xs:flex-row w-full shadow overflow-hidden w-full mb-4">
      <div className="flex flex-row xs:flex-col sm:flex-row flex-1">
        <div className="w-40 flex justify-center items-center">
          <Image src={image} size={150} />
        </div>
        <div className="flex-1 flex flex-col items-start p-4">
          <span className="text-xl font-semibold mb-2">{item.title}</span>
          <span className="text-xl text-gray-400 mb-2">{`${item.price}₺`}</span>
        </div>
      </div>
      <div className="flex flex-row xs:flex-col items-center xs:items-end justify-between xs:justify-center p-4">
        <div className="xs:mb-4 h-full">
          {item.quantity > 1 && <IconButton icon={<TrashIcon small />} />}
        </div>
        <div className="flex items-center bg-gray-100 rounded-full ">
          <IconButton
            onClick={handleRemoveProductFromCart}
            round
            icon={
              item.quantity === 1 ? <TrashIcon small /> : <MinusIcon small />
            }
          />
          <span className="mx-4 text-md font-semibold">{item.quantity}</span>
          <IconButton
            onClick={handleAddProductToCart}
            round
            icon={<PlusIcon small />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;

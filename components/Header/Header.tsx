import Link from "next/link";

import { IconButton } from "../Button";
import Search from "../Icon/Search";
import ShoppingCart from "../Icon/ShoppingCart";

const Header = ({}) => {
  return (
    <div className="w-screen shadow p-2">
      <div className="container mx-auto max-w-4xl flex justify-between items-center px-2">
        <Link href="/">
          <a className="text-xl font-semibold">Sticker Store</a>
        </Link>
        <div className="flex items-center gap-x-2">
          <IconButton icon={<Search />} href="#" />
          <IconButton icon={<ShoppingCart />} text="100₺" href="/cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;

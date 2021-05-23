import Link from "next/link";

import { IconButton } from "../Button";
import Search from "../Icon/Search";
import Image from "../Image";
import CartButton from "./CartButton";

const Header = ({}) => {
  return (
    <div className="w-screen shadow p-2">
      <div className="container mx-auto max-w-4xl flex justify-between items-center px-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-xl font-semibold flex justify-between items-center">
              <Image local src="/sticker-store-128.png" size={32} />
              <span className="ml-4">Sticker Store</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <IconButton icon={<Search />} href="#" />
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

import Link from "next/link";

import Image from "../Image";
import { IconButton } from "../Button";
import { PlusIcon } from "../Icon";

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-4xl flex justify-between items-start px-2 pt-8 flex-1 mb-8">
        <div className="flex flex-col items-start justify-between">
          <div className="flex items-center justify-start mb-8">
            <Image local src="/sticker-store-128.png" size={32} />
          </div>
          <span className="text-gray-400">
            © 2021 EO, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex flex-col items-end">
            <Link href={"/"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">Home</a>
            </Link>
            <Link href={"/about"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">About</a>
            </Link>
            <Link href={"/faq"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">FAQ</a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex flex-col items-start">
            <Link href={"/terms-of-use"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                Terms of Use
              </a>
            </Link>
            <Link href={"/privacy-policy"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end">
          <IconButton onClick={() => {}} icon={<span>TR</span>} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

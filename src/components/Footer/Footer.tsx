import React from "react";

import Link from "next/link";

import Image from "../Image";
// import { IconButton } from "../Button";
// import { PlusIcon } from "../Icon";
// import { useRouter } from "next/router";

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row justify-between items-start px-2 pt-8 flex-1 mb-8">
        <div className="flex flex-col items-start justify-between mb-4">
          <div className="flex items-center justify-start mb-8">
            <Image local src="/sticker-store-128.png" size={32} />
          </div>
          <span className="text-gray-400">
            © 2021{" "}
            <a href="https://github.com/enesozturk" target="_blank">
              Enes Ozturk
            </a>
            . All rights reserved.
          </span>
        </div>
        <div className="flex-1 flex justify-end mb-4">
          <div className="flex flex-col items-start sm:items-end">
            <Link href={"/"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">Home</a>
            </Link>
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">About</a>
            </Link>
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">FAQ</a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-end mb-4">
          <div className="flex flex-col items-start">
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                Terms of Use
              </a>
            </Link>
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end mb-4">
          <a href="http://github.com/enesozturk/sticker-store" target="_blank">
            <Image local src="/github-logo.png" size={32} />
          </a>
          {/* <IconButton
            shallow
            href={router.asPath}
            locale={router.locale === "tr" ? "en" : "tr"}
            icon={<span>{language}</span>}
          /> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

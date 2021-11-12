import React from "react";

import Link from "next/link";

import Image from "../Image";
import { IconButton } from "../Button";
import { PlusIcon } from "../Icon";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Footer() {
  const {
    t: translate,
    i18n: { language },
  } = useTranslation();
  const router = useRouter();

  const getLanguageIcon = (lang: string) => {
    if (lang === "en") {
      return "🇺🇸";
    }

    // return turkey icon
    return "🇹🇷";
  };

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
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                {translate("footer.links.home")}
              </a>
            </Link>
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                {translate("footer.links.about")}
              </a>
            </Link>
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                {translate("footer.links.faq")}
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-end mb-4">
          <div className="flex flex-col items-start">
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                {translate("footer.links.terms_of_use")}
              </a>
            </Link>
            <Link href={"#"}>
              <a className="mb-2 text-gray-500 hover:text-gray-600">
                {translate("footer.links.privacy_policy")}
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center mb-4">
          <a
            className="mr-2"
            href="http://github.com/enesozturk/sticker-store"
            target="_blank"
          >
            <Image local src="/github-logo.png" size={32} />
          </a>
          <Link
            shallow
            href={router.asPath}
            locale={language === "tr" ? "en" : "tr"}
          >
            <a className="mr-2 text-4xl px-1">{getLanguageIcon(language)}</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

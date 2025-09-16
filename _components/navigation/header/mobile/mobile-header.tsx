"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { X } from "lucide-react";
import classNames from "classnames";

import navData from "@/_data/nav-data.json";
import Image from "next/image";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative px-7 py-5 desktop:hidden">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/logo/la-luna-boutique-logo-white.png"
            alt="La Luna Boutique - Plettenberg Bay"
            width={121}
            height={27}
            loading="eager"
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="-m-3 p-3"
          aria-label="Open menu"
        >
          <Image src="/icons/menu.svg" alt="Menu icon" width={22} height={16} />
        </button>
      </div>

      {/* Slide-out Menu */}
      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-white transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex py-5 items-center justify-end px-7">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="-mt-0.5 -mr-1"
          >
            <X color="#4D4D4D" className="h-14 w-14 p-3 -m-3" strokeWidth={2} />
          </button>
        </div>
        <nav className="px-7">
          <ul className="grid gap-5">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-[20px] text-black font-normal p-3 -m-3"
                    prefetch={false}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

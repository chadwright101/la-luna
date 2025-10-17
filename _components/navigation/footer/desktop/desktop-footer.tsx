import Link from "next/link";
import Image from "next/image";

import navData from "@/_data/nav-data.json";

export function DesktopFooter() {
  return (
    <div className="hidden desktop:block pt-10 pb-5 px-5">
      <div className="flex justify-between">
        <nav>
          <ul className="flex flex-col">
            {navData.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-[14px] text-white hover:text-opacity-80 ease-in-out duration-200 hover:text-pink"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            {/* <SocialIcons cssClasses="mt-2" small /> */}
          </ul>
        </nav>

        <div className="flex flex-col gap-7 items-end">
          <Image
            src="/logo/la-luna-boutique-logo-blush-pink.png"
            alt="La Luna Boutique - Plettenberg Bay"
            width={170}
            height={38}
          />
          <div className="text-right">
            <p className="text-[14px] text-white">Designed & developed by</p>
            <Link
              href="https://thewrightdesigns.co.za"
              aria-label="The Wright Designs"
              className="text-[14px] text-white p-2 -m-2 underline underline-offset-4"
              target="_blank"
            >
              The Wright Designs
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center col-span-2 place-self-center w-full mt-6">
        <h4 className="text-white text-[14px]">
          © {new Date().getFullYear()} La Luna Boutique |{" "}
          <Link
            href="/"
            className="text-[14px] p-2 -m-2 text-white underline underline-offset-4"
          >
            www.lalunaplett.co.za
          </Link>
        </h4>
      </div>
    </div>
  );
}

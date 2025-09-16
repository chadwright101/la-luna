import Link from "next/link";
import Image from "next/image";

import navData from "@/_data/nav-data.json";

export function DesktopHeader() {
  return (
    <div className="hidden py-6 px-5 desktop:flex items-center justify-between overflow-hidden">
      <Link href="/" className="mr-auto hover:opacity-80">
        <Image
          src="/logo/la-luna-boutique-logo-white.png"
          alt="La Luna Boutique - Plettenberg Bay"
          width={197}
          height={44}
          loading="eager"
        />
      </Link>
      <nav className="self-end">
        <ul className="flex gap-4 items-center">
          {navData.map(({ title, url }, id) => {
            return (
              <li key={id}>
                <Link
                  href={url}
                  className="text-paragraph text-white hover:text-pink"
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
  );
}

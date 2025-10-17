import Image from "next/image";
import Link from "next/link";

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-7 items-center px-7 pt-10 pb-5 desktop:hidden">
      {/* <SocialIcons /> */}
      <Image
        src="/logo/la-luna-boutique-logo-blush-pink.png"
        alt="La Luna Boutique - Plettenberg Bay"
        width={170}
        height={38}
      />
      <div className="text-center">
        <h4 className="text-white text-[14px]">
          © {new Date().getFullYear()} La Luna Boutique{" "}
        </h4>
        <Link
          href="/"
          className="text-[14px] p-2 -m-2 text-white underline underline-offset-4"
        >
          www.lalunaplett.co.za
        </Link>
      </div>
      <div className="text-center">
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
  );
}

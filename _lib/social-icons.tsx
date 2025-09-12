import Link from "next/link";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  small?: boolean;
  black?: boolean;
}

const facebookLink = "#";
const instagramLink = "#";
const whatsappLink = "#";
const facebookLogoWhite = "/icons/facebook-white.svg";
const instagramLogoWhite = "/icons/instagram-white.svg";
const whatsAppLogoWhite = "/icons/whatsapp-white.svg";
const facebookLogoBlack = "/icons/facebook-white.svg";
const instagramLogoBlack = "/icons/instagram-white.svg";
const whatsAppLogoBlack = "/icons/whatsapp-white.svg";

const SocialIcons = ({ cssClasses, small, black }: Props) => {
  if (!small) {
    return (
      <ul className={`flex gap-5 ${cssClasses}`}>
        <li>
          <Link
            href={facebookLink}
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Facebook page"
          >
            <Image
              src={black ? facebookLogoBlack : facebookLogoWhite}
              alt="View our Facebook page"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link
            href={instagramLink}
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Instagram profile"
          >
            <Image
              src={black ? instagramLogoBlack : instagramLogoWhite}
              alt="View our Instagram profile"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link
            href={whatsappLink}
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={black ? whatsAppLogoBlack : whatsAppLogoWhite}
              alt="Get in touch on WhatsApp"
              width={28}
              height={28}
            />
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className={`flex gap-2 ${cssClasses}`}>
        <li>
          <Link
            href={facebookLink}
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="View our Facebook page"
          >
            <Image
              src={black ? facebookLogoBlack : facebookLogoWhite}
              alt="View our Facebook page"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link
            href={instagramLink}
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="View our Instagram profile"
          >
            <Image
              src={black ? instagramLogoBlack : instagramLogoWhite}
              alt="View our Instagram profile"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link
            href={whatsappLink}
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200"
            target="_blank"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={black ? whatsAppLogoBlack : whatsAppLogoWhite}
              alt="Get in touch on WhatsApp"
              width={20}
              height={20}
            />
          </Link>
        </li>
      </ul>
    );
  }
};

export default SocialIcons;

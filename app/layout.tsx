import type { Metadata } from "next";

import { Outfit } from "next/font/google";

const outfitSansSerif = Outfit({
  variable: "--font-outfit-sans-serif",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "600"],
});

import "@/_styles/globals.css";
import { Header } from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lalunaplett.co.za"),
  title: "La Luna Boutique - Plettenberg Bay",
  description:
    "La Luna Boutique in Plettenberg Bay offers exquisite swimwear, lingerie, and leisurewear from Germany, Italy, Australia, and South Africa. Experience elegance and glamour for every occasion.",
  keywords:
    "boutique, swimwear, lingerie, leisurewear, Plettenberg Bay, South Africa, imported fashion, German fashion, Italian fashion, Australian fashion, elegant clothing, beachwear, nightwear, moonlit dinner, luxury boutique, coastal fashion, summer style, resort wear",
  openGraph: {
    description:
      "La Luna Boutique in Plettenberg Bay offers exquisite swimwear, lingerie, and leisurewear from Germany, Italy, Australia, and South Africa. Experience elegance and glamour for every occasion.",
    type: "website",
    locale: "en_ZA",
    siteName: "La Luna Boutique - Plettenberg Bay",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitSansSerif.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Outfit } from "next/font/google";

const outfitSansSerif = Outfit({
  variable: "--font-outfit-sans-serif",
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "600"],
});

import "@/_styles/globals.css";
import { Header } from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lalunaplett.co.za"),
  title: "La Luna Boutique - Plettenberg Bay",
  description: "",
  keywords: "",
  openGraph: {
    description: "",
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

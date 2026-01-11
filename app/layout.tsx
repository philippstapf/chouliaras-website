import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chouliaras | Immobilien Investment in NRW",
  description:
    "Evangelos & Alexandros Chouliaras - Ihr Partner für Immobilien Investment in NRW. Wir kaufen und vermieten Wohnimmobilien im Ruhrgebiet und Münsterland.",
  keywords: [
    "Immobilien",
    "Investment",
    "NRW",
    "Ruhrgebiet",
    "Münsterland",
    "Wohnimmobilien",
    "Mehrfamilienhäuser",
    "Eigentumswohnungen",
  ],
  authors: [
    { name: "Evangelos Chouliaras" },
    { name: "Alexandros Chouliaras" },
  ],
  openGraph: {
    title: "Chouliaras | Immobilien Investment in NRW",
    description:
      "Evangelos & Alexandros Chouliaras - Ihr Partner für Immobilien Investment in NRW.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Great_Vibes, Marcellus, Outfit, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Preloader, ScrollExtras } from "@/components/layout/Chrome";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const marcellus = Marcellus({ variable: "--font-marcellus", subsets: ["latin"], weight: "400" });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const vibes = Great_Vibes({ variable: "--font-vibes", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "ArbanSpice Restaurant | Good Food Brings People Together",
    template: "%s | ArbanSpice Restaurant",
  },
  description:
    "ArbanSpice — a perfect blend of authentic flavours, fresh ingredients and warm hospitality in the heart of New Delhi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${marcellus.variable} ${outfit.variable} ${vibes.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Preloader />
        <ScrollExtras />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Zimplow Holdings Limited",
    template: "%s | Zimplow Holdings Limited",
  },
  description:
    "Zimplow Holdings Limited is a market leader across agriculture, mining, logistics, tyres, infrastructure and power generation equipment, delivering premium brands and service support across Zimbabwe.",
  metadataBase: new URL("https://zimplow.co.zw"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://chat.dataagesolutions.com/widget.js"
          data-api-key="dc3c83714ea81183dd1886c0250e9e1be274ab3f585cc2fed0f34a089029c446"
          data-api-url="https://chat.dataagesolutions.com/api"
          data-color="#2563eb"
          async
        />
      </body>
    </html>
  );
}

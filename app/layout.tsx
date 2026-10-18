import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import BackgroundGarden from "@/components/BackgroundGarden";
import ForestFrame from "@/components/ForestFrame";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ibrahim — Solo Dev & Founder",
  description:
    "Solo developer & founder. Apps, SaaS tools, and websites for local businesses.",
  openGraph: {
    title: "Ibrahim — Solo Dev & Founder",
    description:
      "Solo developer & founder. Apps, SaaS tools, and websites for local businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <BackgroundGarden />
        <ForestFrame />
        <div className="relative z-20 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

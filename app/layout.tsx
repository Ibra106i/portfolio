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

const title = "Ibrahim | MoodShift, Livecheck & Storefront Sites";
const description =
  "I build MoodShift, a mood tracker with AI weekly letters, and Livecheck, a website auditor. Storefront Sites builds websites for local businesses.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/icon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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

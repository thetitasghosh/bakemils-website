import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/section/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bakemils-website.vercel.app/"), // ⚠️ replace

  title: {
    default: "Bakemills | Premium Bakery & Handmade Desserts",
    template: "%s | Bakemills",
  },

  description:
    "Bakemills is a premium bakery crafting handmade cakes, pastries, and brownies using organic ingredients and traditional baking methods. Fresh, delicious, and made with passion since 2010.",

  keywords: [
    "Bakemills bakery",
    "premium bakery",
    "cakes pastries brownies",
    "handmade desserts",
    "fresh bakery near me",
    "organic bakery",
    "custom cakes",
    "artisan bakery",
  ],

  authors: [{ name: "Bakemills" }],
  creator: "Bakemills",

  // openGraph: {
  //   title: "Bakemills | Handmade Premium Bakery",
  //   description:
  //     "Fresh cakes, pastries, and brownies made with love and premium ingredients. Discover the taste of handcrafted perfection.",
  //   url: "https://yourdomain.com",
  //   siteName: "Bakemills",
  //   images: [
  //     {
  //       url: "/og-bakery.jpg", // ⚠️ add this in /public
  //       width: 1200,
  //       height: 630,
  //       alt: "Bakemills Bakery",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Bakemills Bakery",
  //   description: "Handmade cakes, pastries, and brownies crafted with passion.",
  //   images: ["/og-bakery.jpg"],
  // },

  // robots: {
  //   index: true,
  //   follow: true,
  // },

  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}

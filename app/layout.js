"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishListContext";
import { Figtree } from "next/font/google";


const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights you want to use
  variable: "--font-figtree",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        {/* Add the favicon */}
        <link rel="icon" href="/favicon.svg?v=1" type="image/svg+xml" />

        <title>Chez Tati</title>
      </head>
      <body className={figtree.className}>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            {children}
            <ProgressBar height="2px" color="#EA5326" />
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

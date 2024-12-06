"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import { Figtree } from "@next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

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
      <body className={figtree.className}>
        {/* <Navbar /> */}
        {children}
        <ProgressBar
          height="2px"
          color="#EA5326"
        />
        <Footer />
      </body>
    </html>
  );
}

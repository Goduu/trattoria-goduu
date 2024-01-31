import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "./theme-providers";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import siteMetadata from "@/siteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteMetadata.headerTitle,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased dark:bg-green-950 dark:text-green-50">
        <ThemeProviders >
          <Header />
          <main className={inter.className}>{children}</main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandhya's Blog",
  description: "Personal blog and portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-white dark:bg-gray-900 dark:text-white`}>
        <MainLayout>{children}</MainLayout>
        <Analytics />
      </body>
    </html>
  );
}

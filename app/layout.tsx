import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { DEFAULT_METADATA } from "@/configs/seo";
import Navbar from "@/components/Navbar";

const openSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = { ...DEFAULT_METADATA };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <NextTopLoader showSpinner={false} />
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

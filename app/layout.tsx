import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { DEFAULT_METADATA } from "@/configs/seo";

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
      <body className={openSans.className}>{children}</body>
    </html>
  );
}

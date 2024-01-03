import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { DEFAULT_METADATA } from "@/configs/seo";
import Navbar from "@/components/Navbar";
import { ThemeProviders } from "@/components/ThemeProvider";
import cn from "@/libs/cn";

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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <body
        className={cn(
          openSans.className,
          "antialiased text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 transition-colors duration-500"
        )}
      >
        <NextTopLoader showSpinner={false} />
        <ThemeProviders>
          <main>
            <Navbar />
            {children}
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}

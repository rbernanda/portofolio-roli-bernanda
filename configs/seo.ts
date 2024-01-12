import { Metadata } from "next";

const SITE_DESCRIPTION =
  "I specialize in TypeScript, React, and Web Performance Optimization.";

const SITE_TITLE = "Roli Bernanda";

export const DEFAULT_METADATA: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Typescript",
    "backend developer",
    "frontend developer",
    "react developer",
    "software engineer",
    "Javascript",
  ],
  manifest: `/manifest.json`,
  category: "blog",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `/roli-bernanda.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`/roli-bernanda.png`],
    creator: "@rbernanda",
  },
};

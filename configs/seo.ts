import { Metadata } from "next";

const SITE_DESCRIPTION =
  "I am an enthusiastic software engineer specializing in web, back-end and iOS development";

const SITE_TITLE = "Roli Bernanda";

export const DEFAULT_METADATA: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "ios engineer",
    "backend developer",
    "frontend developer",
    "react developer",
    "software engineer",
    "mobile developer",
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

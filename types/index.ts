import { ReactElement, JSXElementConstructor } from "react";
import type { StaticImageData } from "next/image";
import { ReadTimeResults } from "reading-time";

export type SocialMedia = {
  id: number;
  name: string;
  icon: string | StaticImageData;
  href: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  readingTime: ReadTimeResults;
  image: string;
};

export type BlogPost = {
  meta: BlogFrontmatter;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

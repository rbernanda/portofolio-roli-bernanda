import { socialMedia } from "@/data/socialMedia";
import type { SocialMedia } from "@/types";

export const getSocialMedia = (): Promise<SocialMedia[]> => {
  return new Promise((resolve, _) => {
    resolve(socialMedia);
  });
};

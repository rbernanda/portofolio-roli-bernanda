import { achievements } from "@/data/achievements";
import type { Achievement } from "@/types";

export const getAchievements = (): Promise<Achievement[]> => {
  return new Promise((resolve, _) => {
    resolve(achievements);
  });
};

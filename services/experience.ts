import { experiences } from "@/data/experiences";
import type { Experience } from "@/types";

export const getExperiences = (): Promise<Experience[]> => {
  return new Promise((resolve, _) => {
    resolve(experiences);
  });
};

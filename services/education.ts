import { educations } from "@/data/education";
import type { Education } from "@/types";

export const getEducation = (): Promise<Education[]> => {
  return new Promise((resolve, _) => {
    resolve(educations);
  });
};

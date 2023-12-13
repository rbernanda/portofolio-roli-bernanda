import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

export const getSkills = (): Promise<SkillCategory[]> => {
  return new Promise((resolve, _) => {
    resolve(skills);
  });
};

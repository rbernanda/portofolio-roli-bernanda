import { projects } from "@/data/projects";
import type { Project } from "@/types";

export const getProjects = (): Promise<Project[]> => {
  return new Promise((resolve, _) => {
    resolve(projects);
  });
};

import type { StaticImageData } from "next/image";

export type SkillCategory = {
  id: number;
  category: string;
  skills: Skill[];
};

export type Skill = {
  id: number;
  name: string;
  description: string;
  icon: string | StaticImageData;
};

export type Experience = {
  id: number;
  name: string;
  role: string;
  description: string;
  startDate: Date;
  endDate?: Date;
};

export type Education = {
  id: number;
  school: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  description: string;
  icon: string | StaticImageData;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  techStack: Skill[];
};

export type SocialMedia = {
  id: number;
  name: string;
  icon: string | StaticImageData;
  href: string;
};

export type Achievement = {
  id: number;
  title: string;
  issueDate: Date;
  description: string;
};

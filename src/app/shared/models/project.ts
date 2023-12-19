import {Technology} from "./technology";

export interface Project {
  img: string;
  title: string;
  description: string;
  slug: string;
  github?: string | ProjectGithub;
  website?: string;
  inUse: boolean;
  inProgress: boolean;
  mainColor?: string;
  technologies?: Technology[];
}

export type ProjectGithub = { url: string, name: string, version?: string, org?: string, branch?: string, noReadMe?: boolean };

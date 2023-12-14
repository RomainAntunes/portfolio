export interface Project {
  img: string;
  title: string;
  description: string;
  slug: string;
  github?: string;
  website?: string;
  inUse: boolean;
  inProgress: boolean;
  mainColor?: string;
}

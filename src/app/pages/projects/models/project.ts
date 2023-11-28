import {Links} from "./links";
import {Technologies} from "./technologies";

export interface Project {
  slug: string;
  name: string;
  description: string;
  image?: string;
  links?: Links[];
  technologies?: Technologies[];
  date?: string;
  in_progress: boolean;
}

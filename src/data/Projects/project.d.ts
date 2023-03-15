import { projectCategories } from './projectCategories';
import { skills } from './Skills/skills';

export interface Project {
  name: string;
  category: (typeof projectCategories)[number];
  desc: string;
  tech: (typeof skills)[number]['name'][];
  link: {
    demo: string | null;
    repo: string | null;
  };
}

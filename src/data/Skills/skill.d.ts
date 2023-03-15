import { skillCategories } from './skillCategories';

export interface Skill {
  name: string;
  category: (typeof skillCategories)[number];
  icon: string;
  show?: boolean;
}

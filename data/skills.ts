import { skillCategories } from './skillCategories';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    category: skillCategories[0],
    icon: 'html.svg',
  },
  {
    name: 'CSS',
    category: skillCategories[0],
    icon: 'css.svg',
  },
  {
    name: 'JavaScript',
    category: skillCategories[0],
    icon: 'js.svg',
  },
  {
    name: 'TypeScript',
    category: skillCategories[0],
    icon: 'ts.svg',
  },
  {
    name: 'Go',
    category: skillCategories[0],
    icon: 'golang.svg',
  },
  {
    name: 'React',
    category: skillCategories[1],
    icon: 'react.svg',
  },
  {
    name: 'Next.js',
    category: skillCategories[1],
    icon: 'next.svg',
  },
  {
    name: 'Node.js',
    category: skillCategories[1],
    icon: 'node.svg',
  },
  {
    name: 'Express.js',
    category: skillCategories[1],
    icon: 'express.png',
  },
  {
    name: 'NestJS',
    category: skillCategories[1],
    icon: 'nest.svg',
  },
  {
    name: 'Gin',
    category: skillCategories[1],
    icon: 'gin.svg',
  },
  {
    name: 'Telegraf',
    category: skillCategories[1],
    icon: 'telegraf.svg',
  },
  {
    name: 'Zustand',
    category: skillCategories[1],
    icon: 'zustand.png',
  },
  {
    name: 'React Hook Form',
    category: skillCategories[1],
    icon: 'react-hook-form.svg',
  },
  {
    name: 'Jotai',
    category: skillCategories[1],
    icon: 'jotai.png',
  },
  {
    name: 'Bootstrap',
    category: skillCategories[2],
    icon: 'bootstrap.svg',
  },
  {
    name: 'Tailwind CSS',
    category: skillCategories[2],
    icon: 'tailwind.svg',
  },
  {
    name: 'daisyUI',
    category: skillCategories[2],
    icon: 'daisy.svg',
  },
  {
    name: 'Mantine',
    category: skillCategories[2],
    icon: 'mantine.svg',
  },
  {
    name: 'PostgreSQL',
    category: skillCategories[3],
    icon: 'postgres.svg',
  },
  {
    name: 'MongoDB',
    category: skillCategories[3],
    icon: 'mongo.svg',
  },
  {
    name: 'MySQL',
    category: skillCategories[3],
    icon: 'mysql.svg',
  },
  {
    name: 'SQLite',
    category: skillCategories[3],
    icon: 'sqlite.svg',
  },
  {
    name: 'EndeavourOS',
    category: skillCategories[4],
    icon: 'endeavouros.svg',
  },
  {
    name: 'Arch Linux',
    category: skillCategories[4],
    icon: 'arch.svg',
  },
  {
    name: 'GNU/Linux',
    category: skillCategories[4],
    icon: 'linux.png',
  },
];

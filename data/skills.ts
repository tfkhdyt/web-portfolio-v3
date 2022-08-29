import { categories } from './categories';

interface Skill {
  name: string;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    category: categories[0],
    icon: 'html.svg',
  },
  {
    name: 'CSS',
    category: categories[0],
    icon: 'css.svg',
  },
  {
    name: 'JavaScript',
    category: categories[0],
    icon: 'js.svg',
  },
  {
    name: 'TypeScript',
    category: categories[0],
    icon: 'ts.svg',
  },
  {
    name: 'Go',
    category: categories[0],
    icon: 'golang.svg',
  },
  {
    name: 'React',
    category: categories[1],
    icon: 'react.svg',
  },
  {
    name: 'Next.js',
    category: categories[1],
    icon: 'next.svg',
  },
  {
    name: 'Node.js',
    category: categories[1],
    icon: 'node.svg',
  },
  {
    name: 'Express.js',
    category: categories[1],
    icon: 'express.png',
  },
  {
    name: 'NestJS',
    category: categories[1],
    icon: 'nest.svg',
  },
  {
    name: 'Gin',
    category: categories[1],
    icon: 'gin.svg',
  },
  {
    name: 'Telegraf',
    category: categories[1],
    icon: 'telegraf.svg',
  },
  {
    name: 'Zustand',
    category: categories[1],
    icon: 'zustand.png',
  },
  {
    name: 'React Hook Form',
    category: categories[1],
    icon: 'react-hook-form.svg',
  },
  {
    name: 'Jotai',
    category: categories[1],
    icon: 'jotai.png',
  },
  {
    name: 'Bootstrap',
    category: categories[2],
    icon: 'bootstrap.svg',
  },
  {
    name: 'Tailwind CSS',
    category: categories[2],
    icon: 'tailwind.svg',
  },
  {
    name: 'daisyUI',
    category: categories[2],
    icon: 'daisy.svg',
  },
  {
    name: 'Mantine',
    category: categories[2],
    icon: 'mantine.svg',
  },
  {
    name: 'PostgreSQL',
    category: categories[3],
    icon: 'postgres.svg',
  },
  {
    name: 'MongoDB',
    category: categories[3],
    icon: 'mongo.svg',
  },
  {
    name: 'MySQL',
    category: categories[3],
    icon: 'mysql.svg',
  },
  {
    name: 'SQLite',
    category: categories[3],
    icon: 'sqlite.svg',
  },
  {
    name: 'EndeavourOS',
    category: categories[4],
    icon: 'endeavouros.svg',
  },
  {
    name: 'Arch Linux',
    category: categories[4],
    icon: 'arch.svg',
  },
  {
    name: 'GNU/Linux',
    category: categories[4],
    icon: 'linux.png',
  },
];

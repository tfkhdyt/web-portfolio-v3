import { skillCategories } from './skillCategories';

interface Skill {
  name: string;
  category: typeof skillCategories[number];
  icon: string;
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    category: 'Language',
    icon: 'html.svg',
  },
  {
    name: 'CSS',
    category: 'Language',
    icon: 'css.svg',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: 'js.svg',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: 'ts.svg',
  },
  {
    name: 'Go',
    category: 'Language',
    icon: 'golang.png',
  },
  {
    name: 'Python',
    category: 'Language',
    icon: 'python.svg',
  },
  {
    name: 'PHP',
    category: 'Language',
    icon: 'php.svg',
  },
  {
    name: 'React',
    category: 'Framework/Library',
    icon: 'react.svg',
  },
  {
    name: 'Next.js',
    category: 'Framework/Library',
    icon: 'next.svg',
  },
  {
    name: 'Node.js',
    category: 'Framework/Library',
    icon: 'node.png',
  },
  {
    name: 'Express.js',
    category: 'Framework/Library',
    icon: 'express.png',
  },
  {
    name: 'NestJS',
    category: 'Framework/Library',
    icon: 'nest.svg',
  },
  {
    name: 'Gin',
    category: 'Framework/Library',
    icon: 'gin.svg',
  },
  {
    name: 'Telegraf',
    category: 'Framework/Library',
    icon: 'telegraf.svg',
  },
  {
    name: 'Zustand',
    category: 'Framework/Library',
    icon: 'zustand.png',
  },
  {
    name: 'React Hook Form',
    category: 'Framework/Library',
    icon: 'react-hook-form.svg',
  },
  {
    name: 'Jotai',
    category: 'Framework/Library',
    icon: 'jotai.png',
  },
  {
    name: 'Prisma',
    category: 'Framework/Library',
    icon: 'prisma.png',
  },
  {
    name: 'NextAuth',
    category: 'Framework/Library',
    icon: 'nextauth.png',
  },
  {
    name: 'Bootstrap',
    category: 'UI Framework/Component',
    icon: 'bootstrap.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'UI Framework/Component',
    icon: 'tailwind.svg',
  },
  {
    name: 'daisyUI',
    category: 'UI Framework/Component',
    icon: 'daisy.svg',
  },
  {
    name: 'Mantine',
    category: 'UI Framework/Component',
    icon: 'mantine.svg',
  },
  {
    name: 'PostgreSQL',
    category: 'DBMS',
    icon: 'postgres.svg',
  },
  {
    name: 'MongoDB',
    category: 'DBMS',
    icon: 'mongo.svg',
  },
  {
    name: 'MySQL',
    category: 'DBMS',
    icon: 'mysql.svg',
  },
  {
    name: 'SQLite',
    category: 'DBMS',
    icon: 'sqlite.svg',
  },
  {
    name: 'EndeavourOS',
    category: 'Operating System',
    icon: 'endeavouros.svg',
  },
  {
    name: 'Arch Linux',
    category: 'Operating System',
    icon: 'arch.svg',
  },
  {
    name: 'GNU/Linux',
    category: 'Operating System',
    icon: 'linux.png',
  },
];

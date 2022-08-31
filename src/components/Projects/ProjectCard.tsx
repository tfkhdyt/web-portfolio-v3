import {
  ActionIcon,
  Box,
  Group,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';

import { Project } from '@/data/Projects/project';
import { skills } from '@/data/Skills/skills';

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Paper
      key={project.name}
      component={motion.div}
      whileHover={{ y: -8 }}
      whileTap={{ y: -8 }}
      shadow='sm'
      radius='lg'
      p='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}
      >
        <Title order={3}>{project.name}</Title>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {project.link.github && (
            <Link href={project.link.github} passHref>
              <Box component='a' target='_blank'>
                <ActionIcon color={dark ? undefined : 'dark'} size='lg'>
                  <BsGithub size={24} />
                </ActionIcon>
              </Box>
            </Link>
          )}
          {project.link.demo && (
            <Link href={project.link.demo} passHref>
              <Box component='a' target='_blank'>
                <ActionIcon
                  component='a'
                  target='_blank'
                  color={dark ? undefined : 'dark'}
                  size='lg'
                >
                  <HiExternalLink size={24} />
                </ActionIcon>
              </Box>
            </Link>
          )}
        </Box>
      </Box>
      <Text my='md' sx={{ flexGrow: 2 }}>
        {project.desc}
      </Text>
      <Group spacing='xs'>
        {skills
          .filter((skill) => project.tech.includes(skill.name))
          .map((skill) => (
            <Box
              key={skill.name}
              sx={{ position: 'relative', height: 25, width: 25 }}
            >
              <Image
                src={`/images/tech/${skill.icon}`}
                alt={skill.name}
                layout='fill'
                objectFit='contain'
                style={{ pointerEvents: 'none' }}
              />
            </Box>
          ))}
      </Group>
    </Paper>
  );
}

export default ProjectCard;

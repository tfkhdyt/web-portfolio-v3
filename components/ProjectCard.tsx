import {
  ActionIcon,
  Box,
  Group,
  Image,
  Paper,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';

import { Project } from '../data/project';
import { skills } from '../data/skills';

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
                <Tooltip label='Source Code'>
                  <ActionIcon color={dark ? undefined : 'dark'} size='lg'>
                    <BsGithub size={24} />
                  </ActionIcon>
                </Tooltip>
              </Box>
            </Link>
          )}
          {project.link.demo && (
            <Link href={project.link.demo} passHref>
              <Box component='a' target='_blank'>
                <Tooltip label='Demo'>
                  <ActionIcon
                    component='a'
                    target='_blank'
                    color={dark ? undefined : 'dark'}
                    size='lg'
                  >
                    <HiExternalLink size={24} />
                  </ActionIcon>
                </Tooltip>
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
            <Box key={skill.name}>
              <Tooltip label={skill.name}>
                <Image
                  src={`/images/tech/${skill.icon}`}
                  alt={skill.name}
                  height={25}
                  fit='contain'
                />
              </Tooltip>
            </Box>
          ))}
      </Group>
    </Paper>
  );
}

export default ProjectCard;

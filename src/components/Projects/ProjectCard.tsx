import {
  ActionIcon,
  Box,
  Group,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BiGitRepoForked } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

import { Project } from '@/data/Projects/project';
import { skills } from '@/data/Skills/skills';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { classes } = useStyles();

  return (
    <Paper
      key={project.name}
      shadow='sm'
      radius='lg'
      p='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
      className={classes.card}
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
          {project.link.repo && (
            <Link href={project.link.repo} target='_blank'>
              <Box title='Repository'>
                <ActionIcon color={dark ? undefined : 'dark'} size='lg'>
                  <BiGitRepoForked size={20} />
                </ActionIcon>
              </Box>
            </Link>
          )}
          {project.link.demo && (
            <Link href={project.link.demo} target='_blank'>
              <Box title='Demo'>
                <ActionIcon color={dark ? undefined : 'dark'} size='lg'>
                  <FiExternalLink size={21} />
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
              title={skill.name}
            >
              <Image
                src={`/images/tech/${skill.icon}`}
                alt={skill.name}
                fill
                sizes='(max-width: 768px) 8vw,
                  (max-width: 1200px) 16vw,
                  32vw'
                style={{ pointerEvents: 'none', objectFit: 'contain' }}
              />
            </Box>
          ))}
      </Group>
    </Paper>
  );
};

export default ProjectCard;

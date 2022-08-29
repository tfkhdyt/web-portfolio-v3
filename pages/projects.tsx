import {
  ActionIcon,
  Box,
  Group,
  Image,
  Paper,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';

import Layout from '../components/Layout';
import { projectCategories } from '../data/projectCategories';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

function ProjectsPage() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Head>
        <title>Projects | Taufik Hidayat</title>
      </Head>
      <Text size={42} weight='bold'>
        Projects
      </Text>
      <Tabs defaultValue='website' variant='pills' color='violet' mt='md'>
        <ScrollArea type='never'>
          <Tabs.List grow>
            {projectCategories.map((category) => (
              <Tabs.Tab value={category.toLowerCase()} key={category}>
                <Text weight='bold'>{category}</Text>
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </ScrollArea>

        {projectCategories.map((category) => (
          <Tabs.Panel
            value={category.toLowerCase()}
            key={category}
            pt='xs'
            mt='md'
          >
            <SimpleGrid
              breakpoints={[
                { minWidth: 'sm', cols: 1 },
                { minWidth: 'md', cols: 2 },
              ]}
              spacing='lg'
            >
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <Paper
                    key={project.name}
                    component={motion.div}
                    whileHover={{ y: -8 }}
                    shadow='xs'
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
                            <ActionIcon
                              component='a'
                              target='_blank'
                              color={dark ? undefined : 'dark'}
                              size='lg'
                            >
                              <BsGithub size={24} />
                            </ActionIcon>
                          </Link>
                        )}
                        {project.link.demo && (
                          <Link href={project.link.demo} passHref>
                            <ActionIcon
                              component='a'
                              target='_blank'
                              color={dark ? undefined : 'dark'}
                              size='lg'
                            >
                              <HiExternalLink size={24} />
                            </ActionIcon>
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
                            <Image
                              src={`/images/tech/${skill.icon}`}
                              alt={skill.name}
                              height={25}
                              fit='contain'
                            />
                          </Box>
                        ))}
                    </Group>
                  </Paper>
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
}

export default ProjectsPage;

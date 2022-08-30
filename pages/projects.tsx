import {
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import Head from 'next/head';

import ProjectCard from '../components/ProjectCard';
import { projectCategories } from '../data/projectCategories';
import { projects } from '../data/projects';

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
                {category}
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
                  <ProjectCard project={project} key={project.name} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
}

export default ProjectsPage;

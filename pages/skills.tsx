import { ScrollArea, SimpleGrid, Tabs, Text } from '@mantine/core';
import Head from 'next/head';

import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skillCategories';
import { skills } from '../data/skills';

function skillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Taufik Hidayat</title>
      </Head>
      <Text size={42} weight='bold'>
        Skills
      </Text>
      <Tabs defaultValue='language' variant='pills' color='violet' mt='md'>
        <ScrollArea type='never'>
          <Tabs.List grow>
            {skillCategories.map((category) => (
              <Tabs.Tab value={category.toLowerCase()} key={category}>
                {category}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </ScrollArea>

        {skillCategories.map((category) => (
          <Tabs.Panel
            value={category.toLowerCase()}
            key={category}
            pt='xs'
            mt='md'
          >
            <SimpleGrid
              breakpoints={[
                { minWidth: 0, cols: 2 },
                { minWidth: 'sm', cols: 3 },
                { minWidth: 'md', cols: 3 },
                { minWidth: 'lg', cols: 4 },
              ]}
              spacing='lg'
            >
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillCard skill={skill} key={skill.name} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
}

export default skillsPage;

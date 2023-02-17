import { SimpleGrid, Tabs, Text } from '@mantine/core';
import { NextSeo } from 'next-seo';

import SkillCard from '@/components/Skills/SkillCard';
import { skillCategories } from '@/data/Skills/skillCategories';
import { skills } from '@/data/Skills/skills';

const SkillsPage = () => {
  return (
    <>
      <NextSeo title='Skills' />
      <Text size={42} weight='bold'>
        Skills
      </Text>
      <Tabs defaultValue='language' variant='pills' color='violet' mt='md'>
        <Tabs.List grow>
          {skillCategories.map((category) => (
            <Tabs.Tab value={category.toLowerCase()} key={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>

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
                .filter(
                  (skill) => skill.category === category && skill.show !== false
                )
                .map((skill) => (
                  <SkillCard skill={skill} key={skill.name} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
};

export default SkillsPage;

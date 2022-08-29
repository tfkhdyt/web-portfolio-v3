import {
  Image,
  Paper,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
  Tooltip,
} from '@mantine/core';
import { motion } from 'framer-motion';
import Head from 'next/head';

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
                  <motion.div key={skill.name} whileHover={{ y: -8 }}>
                    <Tooltip label={skill.name}>
                      <Paper shadow='xs' radius='lg' p='xl'>
                        <Image
                          src={`/images/tech/${skill.icon}`}
                          height={100}
                          fit='contain'
                          alt={skill.name}
                        />
                      </Paper>
                    </Tooltip>
                  </motion.div>
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
}

export default skillsPage;

import { Box, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Skill } from '@/data/Skills/skill';

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  return (
    <motion.div whileHover={{ y: -8 }} whileTap={{ y: -8 }} title={skill.name}>
      <Paper shadow='sm' radius='lg' p='xl'>
        <Box
          sx={{
            position: 'relative',
            height: 100,
            width: 100,
            margin: '0 auto',
          }}
        >
          <Image
            src={`/images/tech/${skill.icon}`}
            layout='fill'
            objectFit='contain'
            alt={skill.name}
            style={{
              pointerEvents: 'none',
            }}
            priority={skill.category === 'Language'}
            // caption={skill.name}
          />
        </Box>
      </Paper>
    </motion.div>
  );
}

export default SkillCard;

import { Image, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';

import { Skill } from '../data/skill';

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  return (
    <motion.div whileHover={{ y: -8 }} whileTap={{ y: -8 }}>
      <Paper shadow='sm' radius='lg' p='xl'>
        <Image
          src={`/images/tech/${skill.icon}`}
          height={100}
          fit='contain'
          my='lg'
          alt={skill.name}
          sx={{ pointerEvents: 'none' }}
          caption={skill.name}
        />
      </Paper>
    </motion.div>
  );
}

export default SkillCard;

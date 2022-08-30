import { Image, Paper, Tooltip } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';

import { Skill } from '../data/skill';

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  return (
    <motion.div whileHover={{ y: -8 }}>
      <Tooltip label={skill.name} withArrow withinPortal>
        <Paper shadow='sm' radius='lg' p='xl'>
          <Image
            src={`/images/tech/${skill.icon}`}
            height={100}
            fit='contain'
            alt={skill.name}
          />
        </Paper>
      </Tooltip>
    </motion.div>
  );
}

export default SkillCard;

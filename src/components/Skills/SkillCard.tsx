import { Box, Paper } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import { Skill } from '@/data/Skills/skill';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  skill: Skill;
}

const SkillCard: FC<Props> = ({ skill }) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow='sm'
      radius='lg'
      p='xl'
      className={classes.card}
      title={skill.name}
    >
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
          fill
          alt={skill.name}
          style={{
            pointerEvents: 'none',
            objectFit: 'contain',
          }}
          priority={skill.category === 'Language'}
        />
      </Box>
    </Paper>
  );
};

export default SkillCard;

import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke, transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
      transform: 'translateY(-8px)',
    },
  },
}));

import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke, transform',
    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    transitionDuration: '150ms',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
      transform: 'translateY(-10px)',
    },
  },
  gradientText: {
    backgroundImage: `linear-gradient(to bottom right, ${theme.colors.indigo[7]}, ${theme.colors.red[7]})`,
    color: 'transparent',
    backgroundClip: 'text',
    fontWeight: 700,
    fontSize: 20,
    '@media (min-width: 768px)': {
      fontSize: 24,
      textAlign: 'left',
    },
    lineHeight: 1,
    marginTop: -5,
  },
}));

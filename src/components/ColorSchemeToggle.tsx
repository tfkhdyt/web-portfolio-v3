import {
  createStyles,
  Group,
  Switch,
  useMantineColorScheme,
} from '@mantine/core';
import { BsFillSunFill, BsMoonStars } from 'react-icons/bs';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    '& *': {
      cursor: 'pointer',
    },
    cursor: 'pointer',
  },

  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 1,
    top: 5,
  },

  iconLight: {
    left: 7,
    color: theme.white,
  },

  iconDark: {
    right: 7,
    color: theme.colors.gray[6],
  },
}));

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();

  return (
    <Group position='center' my={30}>
      <div className={classes.root}>
        <BsFillSunFill
          className={cx(classes.icon, classes.iconLight)}
          size={14}
        />
        <BsMoonStars className={cx(classes.icon, classes.iconDark)} size={14} />
        <Switch
          color='yellow'
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          size='md'
        />
      </div>
    </Group>
  );
}

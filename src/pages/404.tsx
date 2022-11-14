import {
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Text,
  Title,
} from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 30,
    paddingRight: 30,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const NotFoundTitle = () => {
  const { classes } = useStyles();

  return (
    <Center sx={{ width: '100vw', height: '100vh' }}>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text
          color='dimmed'
          size='lg'
          align='center'
          className={classes.description}
        >
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group position='center'>
          <Link href='/'>
            <Button variant='subtle' size='md'>
              Take me back to home page
            </Button>
          </Link>
        </Group>
      </Container>
    </Center>
  );
};

export default NotFoundTitle;

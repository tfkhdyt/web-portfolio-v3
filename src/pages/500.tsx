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
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][1],
  },
}));

const ServerError = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root} style={{ height: '100vh' }}>
      <Head>
        <title>Internal Server Error</title>
      </Head>
      <Center sx={{ height: '100vh' }}>
        <Container>
          <div className={classes.label}>500</div>
          <Title className={classes.title}>
            Something bad just happened...
          </Title>
          <Text size='lg' align='center' className={classes.description}>
            Our servers could not handle your request. Try refreshing the page.
          </Text>
          <Group position='center'>
            <Button variant='white' size='md' onClick={() => router.reload()}>
              Refresh the page
            </Button>
          </Group>
        </Container>
      </Center>
    </div>
  );
};

export default ServerError;

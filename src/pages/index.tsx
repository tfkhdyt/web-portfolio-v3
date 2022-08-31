/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Center,
  Grid,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Head>
        <title>Taufik Hidayat | Junior Full Stack Developer</title>
      </Head>
      <Center
        sx={{ height: '75vh', '@media (min-width: 768px)': { height: '80vh' } }}
      >
        <Grid align='center' sx={{ width: '90%' }}>
          <Grid.Col sm={6} orderSm={2}>
            <Group position='center'>
              <Image
                src='/images/tfkhdyt_illustration.svg'
                alt='illustration'
                width={200}
                height={300}
                priority
              />
            </Group>
          </Grid.Col>
          <Grid.Col sm={6} orderSm={1}>
            <Stack
              spacing='md'
              sx={{
                textAlign: 'center',
                '@media (min-width: 768px)': {
                  textAlign: 'left',
                },
              }}
            >
              <Box>
                <Text
                  weight='bold'
                  sx={{
                    fontSize: 36,
                    '@media (min-width: 768px)': {
                      fontSize: 42,
                    },
                  }}
                  color={dark ? 'white' : 'dark'}
                >
                  Taufik Hidayat
                </Text>
                <Text
                  component='span'
                  variant='gradient'
                  weight='bold'
                  gradient={{ from: 'indigo', to: 'red', deg: 45 }}
                  mt={-5}
                  sx={{
                    letterSpacing: 0.15,
                    fontSize: 22,
                    '@media (min-width: 768px)': {
                      fontSize: 32,
                    },
                    lineHeight: 1,
                  }}
                >
                  Junior Full Stack Developer
                </Text>
              </Box>
              <Text
                size='md'
                sx={{
                  '@media (min-width: 992px)': {
                    fontSize: 18,
                  },
                }}
              >
                Hi everyone 👋🏼, welcome to my portfolio website
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Center>
    </>
  );
};

export default Home;

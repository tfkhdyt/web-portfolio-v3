/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Grid,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const isSm = useMediaQuery('(min-width: 768px)');
  const isMd = useMediaQuery('(min-width: 992px)');

  return (
    <>
      <Head>
        <title>Taufik Hidayat | Junior Full Stack Developer</title>
      </Head>
      <Box sx={{ height: '70vh', display: 'grid', placeItems: 'center' }}>
        <Grid align='center'>
          <Grid.Col sm={6} md={6} orderSm={2}>
            <Group position='center' mt='lg'>
              <img
                src='/images/tfkhdyt_illustration.png'
                alt='illustration'
                width={isSm ? '50%' : isSm ? '25%' : '50%'}
                height='auto'
              />
            </Group>
          </Grid.Col>
          <Grid.Col sm={6} md={6} orderMd={1}>
            <Stack
              spacing='lg'
              mt='md'
              sx={{
                textAlign: 'left',
                '@media (max-width: 768px)': {
                  textAlign: 'center',
                },
              }}
            >
              <Box>
                <Text weight='bold' size={36} color={dark ? 'white' : 'dark'}>
                  Taufik Hidayat
                </Text>
                <Text
                  component='span'
                  variant='gradient'
                  weight='bold'
                  size={24}
                  gradient={{ from: 'indigo', to: 'red', deg: 45 }}
                  mt={-5}
                  sx={{ letterSpacing: 0.15 }}
                >
                  Junior Full Stack Developer
                </Text>
              </Box>
              <Text size='lg'>
                Hi everyone 👋🏼, welcome to my portfolio website
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default Home;

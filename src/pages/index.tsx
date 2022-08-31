import { Center, Grid, useMantineColorScheme } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';

import IllustrationImage from '@/components/Home/IllustrationImage';
import WelcomeText from '@/components/Home/WelcomeText';

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <Head>
        <title>Taufik Hidayat | Junior Full Stack Developer</title>
      </Head>
      <Center
        sx={{ height: '75vh', '@media (min-width: 768px)': { height: '80vh' } }}
      >
        <Grid align='center' sx={{ width: '90%' }}>
          <IllustrationImage
            src='/images/tfkhdyt_illustration.svg'
            width={200}
            height={300}
          />
          <WelcomeText isDark={isDark} />
        </Grid>
      </Center>
    </>
  );
};

export default Home;

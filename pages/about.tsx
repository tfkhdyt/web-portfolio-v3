/* eslint-disable react/no-unescaped-entities */
import { Grid, Image, Text } from '@mantine/core';
import Head from 'next/head';

import Layout from '../components/Layout';

function about() {
  return (
    <>
      <Head>
        <title>About Me | Taufik Hidayat</title>
      </Head>
      <Layout>
        <Grid>
          <Grid.Col xs={12} md={9} orderXs={2} orderMd={1}>
            <Text size={42} weight='bold'>
              About Me
            </Text>
            <Text
              component='span'
              variant='gradient'
              size={26}
              weight='bold'
              gradient={{ from: 'indigo', to: 'red', deg: 45 }}
            >
              Taufik Hidayat
            </Text>
            <Text size='lg' my='sm'>
              Hi everyone, my name is Taufik Hidayat. I'm a Junior Full Stack
              Developer, Computer Science Student, YouTuber, Free/Libre and Open
              Source Software Enthusiast, Linux User, and Google-fu.
            </Text>
            <Text size='lg' my='sm'>
              I live in Bandung, Indonesia. I was born in Majalengka, 1 April
              2002. I'm 20 years old. I'm an Computer Science Student from
              Universitas Bale Bandung.
            </Text>
            <Text size='lg' my='sm'>
              Coding has been my passion and hobby since I was 15 years old, and
              I love computer since I was a kid. Besides coding, I love
              listening to music. My favorite genres are Pop Punk,
              Post-hardcore, Metalcore, Nu-metal, and Electronicore. I like
              playing games too. My favorite genre is First Person Shooter
            </Text>
            <Text size='lg' my='sm'>
              Sometimes I watch anime, but I prefer watching western movies and
              series, especially MCU (Marvel Cinematic Universe). I spend a lot
              of time on Facebook sharing memes and shitposts.
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
            <Image src='/images/tfkhdyt_face.jpg' alt='My face' radius={150} />
          </Grid.Col>
        </Grid>
      </Layout>
    </>
  );
}

export default about;

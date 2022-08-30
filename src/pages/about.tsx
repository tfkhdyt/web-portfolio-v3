/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, Group, Image, List, Text, Timeline } from '@mantine/core';
import Head from 'next/head';

function about() {
  return (
    <>
      <Head>
        <title>About Me | Taufik Hidayat</title>
      </Head>
      <Grid>
        <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
          <Image
            src='/images/tfkhdyt_face.jpg'
            alt='My face'
            radius={300}
            width={150}
            height={150}
            fit='contain'
          />
        </Grid.Col>
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
            2002. I'm 20 years old. I'm an Computer Science Student from Bale
            Bandung University.
          </Text>
          <Text size='lg' my='sm'>
            Coding has been my passion and hobby since I was 15 years old, and I
            love computer since I was a kid. Besides coding, I love listening to
            music. My favorite genres are Pop Punk, Post-hardcore, Metalcore,
            Nu-metal, and Electronicore. I like playing games too. My favorite
            genre is First Person Shooter
          </Text>
          <Text size='lg' my='sm'>
            Sometimes I watch anime, but I prefer watching western movies and
            series, especially MCU (Marvel Cinematic Universe). I spend a lot of
            time on Facebook sharing memes and shitposts.
          </Text>
        </Grid.Col>
      </Grid>
      <Box>
        <Text size={42} weight='bold'>
          Education
        </Text>
        <Timeline active={1} mt='md'>
          <Timeline.Item title='Vocational High School'>
            <Text>SMKN 7 Baleendah</Text>
            <Text size='sm'>Software Engineering</Text>
            <Text size='xs' color='dimmed' mt={4}>
              2017 - 2020
            </Text>
          </Timeline.Item>
          <Timeline.Item title='University'>
            <Text>Bale Bandung University</Text>
            <Text size='sm'>Computer Science (Current GPA: 3.62)</Text>
            <Text size='xs' color='dimmed' mt={4}>
              2020 - present
            </Text>
          </Timeline.Item>
        </Timeline>
      </Box>

      <Box mt='md'>
        <Text size={42} weight='bold'>
          Work Experience
        </Text>
        <Timeline active={0} mt='md'>
          <Timeline.Item title='Internship'>
            <Text>PT. Inovindo Digital Media</Text>
            <List>
              <List.Item>
                Developed an e-commerce website for resellers
              </List.Item>
              <List.Item>
                Deployed websites that have been finished by the team to web
                hosting service
              </List.Item>
              <List.Item>Managed a company product list database</List.Item>
              <List.Item>
                Published articles for client’s company blog
              </List.Item>
              <List.Item>
                Improved client’s website Seach Engine Optimization
              </List.Item>
            </List>
            <Text size='xs' color='dimmed' mt={4}>
              Jan 2019 - Mar 2019
            </Text>
          </Timeline.Item>
        </Timeline>
      </Box>

      <Box mt='md'>
        <Text size={42} weight='bold'>
          Resume
        </Text>
        <Group position='center'>
          <iframe
            src='https://drive.google.com/file/d/1NJcXYr5SZNkxt03KKaiDNNYoc2_cCWBj/preview'
            width='640'
            height='480'
            allow='autoplay'
            loading='lazy'
          />
        </Group>
      </Box>
    </>
  );
}

export default about;

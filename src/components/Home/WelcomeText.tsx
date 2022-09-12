import { Box, Grid, Stack, Text } from '@mantine/core';
import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { useStyles } from '@/hooks/useStyles';

interface Props {
  isDark: boolean;
}

const WelcomeText: FC<Props> = ({ isDark }) => {
  const { classes } = useStyles();

  return (
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
            color={isDark ? 'white' : 'dark'}
          >
            Taufik Hidayat
          </Text>
          {/*  <Text
            component='span'
            variant='gradient'
            weight='bold'
            gradient={{ from: 'indigo', to: 'red', deg: 45 }}
            mt={-5}
            sx={{
              fontSize: 20,
              '@media (min-width: 768px)': {
                fontSize: 28,
              },
              lineHeight: 1,
            }}
          > */}
          <TypeAnimation
            sequence={[
              'Junior Full Stack Developer',
              2000,
              'Linux Power User',
              2000,
              'FLOSS Enthusiast',
              2000,
            ]}
            cursor={true}
            repeat={Infinity}
            className={classes.gradientText}
          />
          {/* </Text> */}
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
  );
};

export default WelcomeText;

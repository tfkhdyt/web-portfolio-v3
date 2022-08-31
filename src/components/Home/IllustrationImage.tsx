import { Grid, Group } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  width: number;
  height: number;
}

function IllustrationImage({ src, width, height }: Props) {
  return (
    <Grid.Col sm={6} orderSm={2}>
      <Group position='center'>
        <Image
          src={src}
          alt='illustration'
          width={width}
          height={height}
          priority
        />
      </Group>
    </Grid.Col>
  );
}

export default IllustrationImage;

import { Grid, Group } from '@mantine/core';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  src: string;
  width: number;
  height: number;
}

const IllustrationImage: FC<Props> = ({ src, width, height }) => {
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
};

export default IllustrationImage;

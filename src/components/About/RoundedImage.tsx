import { Box } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  src: string;
  width: number;
  height: number;
}

const RoundedImage: FC<Props> = ({ src, width, height }) => {
  return (
    <Box
      sx={{
        borderRadius: 150,
        overflow: 'hidden',
        width,
        height,
      }}
    >
      <Image
        src={src}
        alt='My face'
        width={width}
        height={height}
        // objectFit='cover'
        priority
      />
    </Box>
  );
};

export default RoundedImage;

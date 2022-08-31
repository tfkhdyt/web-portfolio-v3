import { Box } from '@mantine/core';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
}

function RoundedImage({ src, width, height }: Props) {
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
        objectFit='cover'
        priority
      />
    </Box>
  );
}

export default RoundedImage;

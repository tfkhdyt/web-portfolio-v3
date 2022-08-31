import { Box, Group, Text } from '@mantine/core';

interface Props {
  src: string;
}

function Resume({ src }: Props) {
  return (
    <Box mt='md'>
      <Text size={42} weight='bold'>
        Resume
      </Text>
      <Group position='center'>
        <iframe
          src={src}
          width='640'
          height='480'
          allow='autoplay'
          loading='lazy'
        />
      </Group>
    </Box>
  );
}

export default Resume;

import { Anchor, Box, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';

interface Props {
  link: string;
}

function Resume({ link }: Props) {
  const theme = useMantineColorScheme();

  return (
    <Box mt='md'>
      <Text>
        Also you can read my resume{' '}
        <Link href={link} passHref>
          <Anchor
            color={theme.colorScheme === 'dark' ? 'gray.0' : 'dark'}
            target='_blank'
            weight='bold'
            component='a'
          >
            here
          </Anchor>
        </Link>
      </Text>
      {/* <Text size={42} weight='bold'>
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
      </Group> */}
    </Box>
  );
}

export default Resume;

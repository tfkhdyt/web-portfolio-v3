import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Box, Text } from '@mantine/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { FC } from 'react';

interface Props {
  link: string;
}

const Resume: FC<Props> = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({});

  return (
    <Box mt='md'>
      <Text size={42} weight='bold' mb='md'>
        Resume
      </Text>
      {/*   <Text>
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
      </Text> */}
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
      <Viewer
        fileUrl='/pdf/resume.pdf'
        plugins={[defaultLayoutPluginInstance]}
      />
    </Box>
  );
};

export default Resume;

import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Box, Text, useMantineColorScheme } from '@mantine/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { FC } from 'react';

interface Props {
  link: string;
}

const Resume: FC<Props> = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [defaultTabs[0]],
  });
  const { colorScheme } = useMantineColorScheme();

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
      <Box
        sx={{
          ['@media (max-width: 768px)']: {
            height: 550,
          },
          height: 842,
        }}
      >
        <Viewer
          fileUrl='/pdf/resume.pdf'
          plugins={[defaultLayoutPluginInstance]}
          theme={colorScheme}
        />
      </Box>
    </Box>
  );
};

export default Resume;

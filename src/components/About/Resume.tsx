import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Box, Text, useMantineColorScheme } from '@mantine/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [defaultTabs[0]],
  });
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box mt='md' id='resume'>
      <Text size={42} weight='bold' mb='md'>
        Resume
      </Text>
      <Box
        sx={{
          ['@media (max-width: 768px)']: {
            height: 450,
          },
          height: 700,
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

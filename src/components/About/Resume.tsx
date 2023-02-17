import { Box, Text } from '@mantine/core';
import Link from 'next/link';

const Resume = () => {
  return (
    <Box mt='md' id='resume'>
      <Text size={42} weight='bold' mb='md'>
        Resume
      </Text>
      <Box
      // sx={{
      //   ['@media (max-width: 768px)']: {
      //     height: 450,
      //   },
      //   height: 700,
      // }}
      >
        {/* <Viewer */}
        {/*   fileUrl='/pdf/resume.pdf' */}
        {/*   plugins={[defaultLayoutPluginInstance]} */}
        {/*   theme={colorScheme} */}
        {/* /> */}
        You can read my resume <Link href='/pdf/resume.pdf'>here.</Link>
      </Box>
    </Box>
  );
};

export default Resume;

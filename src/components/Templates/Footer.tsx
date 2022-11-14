import { Flex, Footer, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';

const CopyleftAnchor = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Link
      href='https://github.com/tfkhdyt/web-portfolio-v3/blob/main/LICENSE'
      target='_blank'
    >
      <Text c={dark ? 'dark.0' : 'dark'} td='underline'>
        Copyleft
      </Text>
    </Link>
  );
};

const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer height={60} py='md' sx={{ textAlign: 'center', fontSize: 14 }}>
      <Flex gap={5} justify='center' align='center' direction='row'>
        <CopyleftAnchor /> &#127279; {currentYear} - Made with ❤️ by tfkhdyt
      </Flex>
    </Footer>
  );
};

export default MyFooter;

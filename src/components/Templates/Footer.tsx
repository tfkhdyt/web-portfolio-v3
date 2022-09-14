import { Footer, Text } from '@mantine/core';
import Link from 'next/link';

const CopyleftAnchor = () => {
  return (
    <Link href='https://github.com/tfkhdyt/web-portfolio-v3/blob/main/LICENSE' passHref>
      <Text component='a' target='_blank' underline>Copyleft</Text>
    </Link>
  )
}

const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer height={60} py='md' sx={{ textAlign: 'center', fontSize: 14 }}>
      <CopyleftAnchor /> &#127279; {currentYear} - Made with ❤️ by tfkhdyt
    </Footer>
  );
};

export default MyFooter;

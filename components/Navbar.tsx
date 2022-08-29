import { Navbar, Text } from '@mantine/core';
import { useAtom } from 'jotai';

import { navbarAtom } from '../atom/navbar';

function MyNavbar() {
  const [opened] = useAtom(navbarAtom);

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  );
}

export default MyNavbar;

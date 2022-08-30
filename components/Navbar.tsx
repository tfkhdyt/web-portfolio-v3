import {
  Anchor,
  Box,
  Divider,
  MediaQuery,
  Navbar,
  Stack,
  Text,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { navbarAtom } from '../atom/navbar';
import { headerItems } from './headerItem';

function MyNavbar() {
  const [opened, setOpened] = useAtom(navbarAtom);
  const router = useRouter();
  const path = router.asPath;

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Stack>
        {headerItems.map((item, idx) => (
          <div key={idx} onClick={() => setOpened(false)}>
            <Link href={item.link} scroll={false}>
              <Text mx='md' size='md' weight={600}>
                {item.label}
              </Text>
            </Link>
            <Divider
              my='sm'
              mx='md'
              size='xs'
              color={item.link === path ? 'violet' : undefined}
            />
          </div>
        ))}
      </Stack>
    </Navbar>
  );
}

export default MyNavbar;

import {
  Divider,
  Navbar,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItems } from '@/data/headerItem';
import { navbarAtom } from '@/store/navbar';

const MyNavbar = () => {
  const [opened, setOpened] = useAtom(navbarAtom);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
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
          <div
            key={idx}
            onClick={() => setOpened(false)}
            style={{ cursor: 'pointer' }}
          >
            <Link
              href={item.link}
              scroll={false}
              target={item.label === 'Blog' ? '_blank' : undefined}
              style={{ textDecoration: 'none' }}
            >
              <Text mx='md' fz='md' weight={600} c={isDark ? 'dark.0' : 'dark'}>
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
};

export default MyNavbar;

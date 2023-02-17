import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItems } from '@/data/headerItem';
import { navbarAtom } from '@/store/navbar';

import SwitchToggle from '../ColorSchemeToggle';

const MyHeader = () => {
  const [opened, setOpened] = useAtom(navbarAtom);
  const theme = useMantineTheme();
  const router = useRouter();
  const path = router.asPath;

  return (
    <Header height={70} p='md'>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size='sm'
              color={theme.colors.gray[6]}
              mr='xl'
            />
          </MediaQuery>

          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Group spacing={0.5}>
              {headerItems.map((item, idx) => (
                <Link
                  href={item.link}
                  key={idx}
                  scroll={false}
                  target={item.label === 'Blog' ? '_blank' : undefined}
                >
                  <Button
                    variant='subtle'
                    size='md'
                    compact
                    color={item.link === path ? 'violet' : 'dark'}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Group>
          </MediaQuery>
        </Box>
        <SwitchToggle />
      </Container>
    </Header>
  );
};

export default MyHeader;

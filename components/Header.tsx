import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  Group,
  Header,
  MediaQuery,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { navbarAtom } from '../atom/navbar';
import { headerItems } from './headerItem';

function MyHeader() {
  const [opened, setOpened] = useAtom(navbarAtom);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
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
                <Link href={item.link} passHref key={idx} scroll={false}>
                  <Button
                    variant='subtle'
                    size='lg'
                    color={item.link === path ? 'violet' : 'gray'}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Group>
          </MediaQuery>
        </Box>
        <ActionIcon
          color={dark ? 'yellow' : 'blue'}
          variant='light'
          onClick={() => toggleColorScheme()}
          title='Toggle color scheme'
          size='lg'
        >
          {dark ? <BsFillSunFill size={16} /> : <BsFillMoonFill size={16} />}
        </ActionIcon>
      </Container>
    </Header>
  );
}

export default MyHeader;

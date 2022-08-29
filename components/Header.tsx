import {
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useAtom } from 'jotai';

import { navbarAtom } from '../atom/navbar';

function MyHeader() {
  const [opened, setOpened] = useAtom(navbarAtom);
  const theme = useMantineTheme();

  return (
    <Header height={70} p='md'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </Header>
  );
}

export default MyHeader;

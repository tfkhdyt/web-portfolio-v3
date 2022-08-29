import { AppShell, Container, useMantineTheme } from '@mantine/core';
import { ReactNode } from 'react';

import useBreakpoint from '../hooks/isSm';
import MyFooter from './Footer';
import MyHeader from './Header';
import MyNavbar from './Navbar';

interface Props {
  children: ReactNode;
}

export default function MyAppShell({ children }: Props) {
  const theme = useMantineTheme();
  const { isSm } = useBreakpoint();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      navbar={isSm ? <MyNavbar /> : undefined}
      footer={<MyFooter />}
      header={<MyHeader />}
    >
      <Container>{children}</Container>
    </AppShell>
  );
}

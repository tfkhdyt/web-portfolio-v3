import { AppShell, useMantineTheme } from '@mantine/core';
import { ReactNode } from 'react';

import MyFooter from './Footer';
import MyHeader from './Header';
import MyNavbar from './Navbar';

interface Props {
  children: ReactNode;
}

export default function MyAppShell({ children }: Props) {
  const theme = useMantineTheme();

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
      asideOffsetBreakpoint='sm'
      navbar={<MyNavbar />}
      footer={<MyFooter />}
      header={<MyHeader />}
    >
      {children}
    </AppShell>
  );
}

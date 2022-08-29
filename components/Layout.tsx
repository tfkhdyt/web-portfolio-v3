import { AppShell, Container, useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import router, { useRouter } from 'next/router';
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

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const router = useRouter();

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

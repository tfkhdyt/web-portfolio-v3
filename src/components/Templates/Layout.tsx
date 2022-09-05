import { AppShell, Container, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import { headerItems } from '@/data/headerItem';
import useBreakpoint from '@/hooks/isSm';

import ScrollToTop from '../ScrollToTop';
import MyFooter from './Footer';
import MyHeader from './Header';
import MyNavbar from './Navbar';

interface Props {
  children: ReactNode;
}

const MyAppShell: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const { isSm } = useBreakpoint();
  const router = useRouter();

  if (!headerItems.map((item) => item.link).includes(router.asPath))
    return <>{children}</>;

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
      <ScrollToTop />
    </AppShell>
  );
};

export default MyAppShell;

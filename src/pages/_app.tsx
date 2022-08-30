import '../styles/globals.css';

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import type { AppProps } from 'next/app';

import { variants } from '../animations/variants';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  const preferredColorScheme = useColorScheme();
  // console.log(preferredColorScheme);

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme, fontFamily: 'Source Sans Pro, sans-serif' }}
      >
        <NotificationsProvider>
          <Layout>
            <style>
              {`html {
                color-scheme: ${colorScheme}
              }`}
            </style>
            <LazyMotion features={domAnimation}>
              <AnimatePresence
                mode='wait'
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <m.div
                  key={router.asPath}
                  variants={variants}
                  initial='hidden'
                  animate='enter'
                  exit='exit'
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                >
                  <Component {...pageProps} />
                </m.div>
              </AnimatePresence>
            </LazyMotion>
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
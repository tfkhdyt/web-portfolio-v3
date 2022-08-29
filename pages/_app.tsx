import '../styles/globals.css';

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;

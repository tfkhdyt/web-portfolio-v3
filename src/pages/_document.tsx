import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { metaTagsData } from '@/data/metaTags';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fontbit.io/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
            rel='stylesheet'
          />
          <link
            rel='shortcut icon'
            href={metaTagsData.favicon}
            type='image/x-icon'
          />
          <script
            data-website-id='8561225e-7d29-4f77-91a5-d8f3ed104625'
            src='https://umami.tfkhdyt.my.id/umami.js'
            async
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

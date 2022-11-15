import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { metaTagsData } from '@/data/metaTags';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <link
            href='https://fontbit.io/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
            rel='stylesheet'
          /> */}
          {/*   <link
            href='https://fontbit.io/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          /> */}
          <link
            rel='shortcut icon'
            href={metaTagsData.favicon}
            type='image/x-icon'
          />
          <meta
            name='msvalidate.01'
            content='FB08EAE4E24D8B37759DD91F6506B854'
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

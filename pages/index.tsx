import { Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TFKHDYT | Web Portfolio</title>
      </Head>
      <Layout>
        <Text>Resize app to see responsive navbar in action</Text>
      </Layout>
    </>
  );
};

export default Home;

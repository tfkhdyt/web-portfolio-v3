import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';

function My404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Box sx={{ display: 'grid', height: '100vh', placeItems: 'center' }}>
        <Stack align='center' spacing={0}>
          <Image src='/images/404.svg' alt='404' height={300} width={300} />
          <Title order={1} mb='xl'>
            Page not found
          </Title>
          <Link href='/' passHref>
            <Button color='violet' component='a' leftIcon={<IoMdArrowBack />}>
              Back to home
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}

export default My404;

import { Text, useMantineColorScheme } from '@mantine/core';
import Head from 'next/head';

import ContactList from '@/components/Contact/ContactList';
import MessageBox from '@/components/Contact/MessageBox';

function Contact() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <Head>
        <title>Contact | Taufik Hidayat</title>
      </Head>
      <main>
        <Text size={42} weight='bold'>
          Contact
        </Text>
        <ContactList isDark={isDark} />
        <MessageBox />
      </main>
    </>
  );
}

export default Contact;

import { Box, Space, Text, useMantineColorScheme } from '@mantine/core';
import Head from 'next/head';

import MessageBox from '@/components/MessageBox';
import { contacts } from '@/data/contacts';

function Contact() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Head>
        <title>Contact | Taufik Hidayat</title>
      </Head>
      <main>
        <Text size={42} weight='bold'>
          Contact
        </Text>
        <Box mt='md'>
          <Text size='lg'>
            Please don’t hesitate to get in touch with me by following my social
            media below:
          </Text>
          <ul>
            {contacts.map((contact, idx) => (
              <li key={idx}>
                <Box sx={{ display: 'flex' }}>
                  <Text size='lg' color={dark ? 'dimmed' : 'dark.7'}>
                    {contact.name}
                  </Text>
                  <Space w={5} />
                  -
                  <Space w={5} />
                  <Text
                    component='a'
                    href={contact.link}
                    target='_blank'
                    size='lg'
                    weight={600}
                    underline
                  >
                    {contact.label}
                  </Text>
                </Box>
              </li>
            ))}
          </ul>
        </Box>
        <MessageBox />
      </main>
    </>
  );
}

export default Contact;

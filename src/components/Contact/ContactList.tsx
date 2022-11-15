import { Box, Flex, Space, Text } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';

import { contacts } from '@/data/Contact/contacts';

interface Props {
  isDark: boolean;
}

const ContactList: FC<Props> = ({ isDark }) => {
  return (
    <Box mt='sm'>
      <Text size='lg'>
        Please don’t hesitate to get in touch with me by following my social
        media below:
      </Text>
      <ul>
        {contacts.map((contact, idx) => (
          <li key={idx}>
            <Flex wrap='wrap'>
              <Text size='lg' color={isDark ? 'dimmed' : 'dark.7'}>
                {contact.name}
              </Text>
              <Space w={5} />
              -
              <Space w={5} />
              <Link href={contact.link} target='_blank' rel='me'>
                <Text
                  fz='lg'
                  fw={600}
                  td='underline'
                  className={`umami--click--${contact.name.replaceAll(
                    ' ',
                    '-'
                  )}-Link`}
                  c={isDark ? 'dark.0' : 'dark'}
                >
                  {contact.label}
                </Text>
              </Link>
            </Flex>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ContactList;

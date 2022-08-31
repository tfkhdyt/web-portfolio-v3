import { Box, Space, Text } from '@mantine/core';

import { contacts } from '@/data/Contact/contacts';

interface Props {
  isDark: boolean;
}

function ContactList({ isDark }: Props) {
  return (
    <Box mt='md'>
      <Text size='lg'>
        Please don’t hesitate to get in touch with me by following my social
        media below:
      </Text>
      <ul>
        {contacts.map((contact, idx) => (
          <li key={idx}>
            <Box sx={{ display: 'flex' }}>
              <Text size='lg' color={isDark ? 'dimmed' : 'dark.7'}>
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
  );
}

export default ContactList;

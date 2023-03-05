import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Group, Text, Textarea, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import { z } from 'zod';

// import { handleSendMessageError } from '@/handlers/handleSendMessageError';
import { updateSendMessageNotif } from '@/lib/notifications/updateSendMessage';

const messageSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Invalid email',
  }),
  message: z.string().min(1, { message: 'Message is required' }),
});

type MessageType = z.infer<typeof messageSchema>;

const MessageBox = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageType>({
    resolver: zodResolver(messageSchema),
  });
  const [token, setToken] = useState('');
  const turnstileWidgetRef = useRef<TurnstileInstance>(null);

  const onSubmit = async (data: MessageType) => {
    showNotification({
      id: 'send-message',
      loading: true,
      title: 'Sending your message',
      message: 'Please wait for a moment',
      autoClose: false,
      disallowClose: true,
    });
    const response = await fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        token,
        message: String(data.message),
      }),
    });
    const dataResponse = await response.json();
    if (!response.ok) {
      // handleSendMessageError(response.status, dataResponse.errors);
      dataResponse.errors.forEach((err: string) => {
        updateSendMessageNotif('error', err);
      });
      return;
    }

    updateSendMessageNotif('success', 'Thank you for reaching me out');

    reset();
    turnstileWidgetRef.current?.reset();
  };

  return (
    <>
      <Box mt='md'>
        <Text size={42} weight='bold'>
          Message
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Group grow mt='sm' sx={{ display: 'flex', alignItems: 'start' }}>
            <TextInput
              placeholder='Your name'
              label='Full name'
              size='md'
              withAsterisk
              {...register('name')}
              error={errors.name?.message}
            />
            <TextInput
              placeholder='Your Email'
              label='Email'
              size='md'
              withAsterisk
              {...register('email')}
              type='email'
              error={errors.email?.message}
            />
          </Group>
          <Group grow mt='sm'>
            <Textarea
              placeholder='Your message'
              label='Message'
              size='md'
              withAsterisk
              {...register('message')}
              error={errors.message?.message}
            />
          </Group>
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
            onSuccess={(token) => setToken(token)}
            style={{ marginTop: '1rem' }}
            ref={turnstileWidgetRef}
          />
          <Button
            mt='md'
            size='md'
            leftIcon={<FiSend />}
            type='submit'
            color='violet'
          >
            Send
          </Button>
        </form>
      </Box>
    </>
  );
};

export default MessageBox;

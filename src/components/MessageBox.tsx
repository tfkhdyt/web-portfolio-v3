import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Group, Text, Textarea, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { handleSendMessageError } from 'handler/handleSendMessageError';
import { updateSendMessageNotif } from 'lib/notifications/updateSendMessage';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import * as yup from 'yup';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

function MessageBox() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    showNotification({
      id: 'send-message',
      loading: true,
      title: 'Sending your message',
      message: 'Please wait for a moment',
      autoClose: false,
      disallowClose: true,
    });
    const response = await fetch(
      process.env.NEXT_PUBLIC_MESSAGE_FORM_API + '/message',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          message: String(data.message),
        }),
      }
    );
    const dataResponse = await response.json();

    if (!response.ok) {
      handleSendMessageError(response.status, dataResponse.message);
      return;
    }
    updateSendMessageNotif('success', 'Thank you for reaching me out');

    reset();
  };

  return (
    <>
      <Box mt='md'>
        <Text size={42} weight='bold'>
          Message
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Group grow mt='md' sx={{ display: 'flex', alignItems: 'start' }}>
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
}

export default MessageBox;

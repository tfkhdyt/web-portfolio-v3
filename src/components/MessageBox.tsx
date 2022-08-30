import { Box, Button, Group, Text, Textarea, TextInput } from '@mantine/core';
import { showNotification, updateNotification } from '@mantine/notifications';
import { useForm } from 'react-hook-form';
import { AiOutlineCheck, AiOutlineExclamation } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function MessageBox() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
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
      switch (response.status) {
        case 500:
          updateNotification({
            id: 'send-message',
            color: 'red',
            title: 'Message failed to send',
            message: 'Server error! Try it next time',
            icon: <AiOutlineExclamation size={16} />,
            autoClose: 2000,
          });
          return;
        case 429:
          updateNotification({
            id: 'send-message',
            color: 'yellow',
            title: 'Message failed to send',
            message: "You're sending message too often! Try it next time",
            icon: <AiOutlineExclamation size={16} />,
            autoClose: 2000,
          });
          return;
        case 400:
          dataResponse.message.forEach((error: string) => {
            updateNotification({
              id: 'send-message',
              color: 'red',
              title: 'Message failed to send',
              message: error.charAt(0).toUpperCase() + error.slice(1),
              icon: <AiOutlineExclamation size={16} />,
              autoClose: 2000,
            });
          });
          return;
        default:
          updateNotification({
            id: 'send-message',
            color: 'yellow',
            title: 'Message failed to send',
            message: 'Unknown error',
            icon: <AiOutlineExclamation size={16} />,
            autoClose: 2000,
          });
          return;
      }
    }
    updateNotification({
      id: 'send-message',
      color: 'teal',
      title: 'Message has been sent',
      message: 'Thank you for reaching me out',
      icon: <AiOutlineCheck size={16} />,
      autoClose: 2000,
    });
    reset();
  };

  // console.log(errors);

  return (
    <>
      <Box mt='md'>
        <Text size={42} weight='bold'>
          Message
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Group grow mt='md'>
            <TextInput
              placeholder='Your name'
              label='Full name'
              size='md'
              withAsterisk
              {...register('name', { required: true })}
              error={
                errors.name?.type === 'required'
                  ? 'Name is required'
                  : undefined
              }
            />
            <TextInput
              placeholder='Your Email'
              label='Email'
              size='md'
              withAsterisk
              {...register('email', { required: true })}
              type='email'
              error={
                errors.email?.type === 'required'
                  ? 'Email is required'
                  : undefined
              }
            />
          </Group>
          <Group grow mt='sm'>
            <Textarea
              placeholder='Your message'
              label='Message'
              size='md'
              withAsterisk
              {...register('message', { required: true })}
              error={
                errors.message?.type === 'required'
                  ? 'Message is required'
                  : undefined
              }
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

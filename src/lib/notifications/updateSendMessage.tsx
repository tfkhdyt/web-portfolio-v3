import { updateNotification } from '@mantine/notifications';
import { ReactNode } from 'react';
import { AiOutlineCheck, AiOutlineExclamation } from 'react-icons/ai';

export const updateSendMessageNotif = (
  status: 'success' | 'warning' | 'error',
  message: string
) => {
  let color = '';
  let title = '';
  let icon: ReactNode;

  switch (status) {
    case 'success':
      color = 'teal';
      title = 'Message has been sent';
      icon = <AiOutlineCheck size={16} />;
      break;
    case 'warning':
      color = 'yellow';
      title = 'Message failed to send';
      icon = <AiOutlineExclamation size={16} />;
      break;
    case 'error':
      color = 'red';
      title = 'Message failed to send';
      icon = <AiOutlineExclamation size={16} />;
      break;
  }

  updateNotification({
    id: 'send-message',
    color,
    title,
    message,
    icon,
    autoClose: 2000,
  });
};

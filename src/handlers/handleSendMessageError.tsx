import { updateSendMessageNotif } from 'lib/notifications/updateSendMessage';

export const handleSendMessageError = (status: number, messages: string[]) => {
  switch (status) {
    case 500:
      updateSendMessageNotif('error', 'Server error! Try it next time');
      return;
    case 429:
      updateSendMessageNotif(
        'warning',
        "You're sending message too often! Try it next time"
      );
      return;
    case 400:
      messages.forEach((error: string) => {
        updateSendMessageNotif(
          'error',
          error.charAt(0).toUpperCase() + error.slice(1)
        );
      });
      return;
    default:
      updateSendMessageNotif('error', 'Unknown error');
      return;
  }
};

import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { bot } from '@/lib/telegram/bot';

const createMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().max(100),
});

const userId = process.env.USER_ID as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = createMessageSchema.safeParse(req.body);

    if (!body.success) {
      const errors = body.error.issues.map((error) => {
        return {
          ...error,
          path: error.path[0],
        };
      });
      return res.status(400).json({
        status: 'fail',
        errors,
      });
    }

    const { name, email, message } = body.data;
    const _message = `*${name} (${email}) says:*
${message}`;

    try {
      await bot.telegram.sendMessage(userId, _message, {
        parse_mode: 'Markdown',
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({
          status: 'error',
          message: error.message,
        });
      }
    }

    return res.status(200).json({
      status: 'success',
      message: 'Your message has been sent, thank you for reaching me out',
    });
  }
  return res.status(501).json({
    status: 'error',
    message: 'Method not implemented',
  });
}

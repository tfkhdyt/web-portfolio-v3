import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { Bot } from '@/lib/telegram/bot';

const createMessageSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name should be a string',
  }),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email should be a string',
    })
    .email('Email is not valid'),
  message: z
    .string({
      required_error: 'Message is required',
      invalid_type_error: 'Message should be a string',
    })
    .max(100, 'Max number of message is 100'),
  token: z.string().optional(),
});

const userId = process.env.USER_ID as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = createMessageSchema.safeParse(req.body);

    if (!body.success) {
      const errors = body.error.issues.map((err) => err.message);
      return res.status(400).json({
        status: 'fail',
        errors,
      });
    }

    const { name, email, message, token } = body.data;

    const formData = new URLSearchParams();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY as string);
    formData.append('response', token as string);

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    const outcome = await result.json();
    if (!outcome.success) {
      return res.status(401).json({
        status: 'fail',
        errors: ['You should complete the turnstile challenge first'],
      });
    }

    const _message = `*${name} (${email}) says:*
${message}`;

    const bot = Bot.getInstance();

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

import { Telegraf } from 'telegraf';

const token = process.env.BOT_TOKEN as string;

export class Bot {
  private static instance: Telegraf;

  public static getInstance(): Telegraf {
    if (!Bot.instance) {
      Bot.instance = new Telegraf(token);
    }

    return Bot.instance;
  }
}

export const bot = new Telegraf(token);

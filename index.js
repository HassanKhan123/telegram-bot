const express = require('express');
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

app.listen(process.env.port || 5000, () => {
  console.log('Server running');
});

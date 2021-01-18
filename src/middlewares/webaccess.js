// import { resetPassword } from '../services/users';

const getWebAccessToken = async (ctx) => {
  console.log('resetPassword ctx.message', ctx.message);
  if (!ctx || !ctx.message) throw Error('Not sender user found');

  const telegramId = (ctx.message.from && ctx.message.from.id) || 0;
  if (telegramId == 0) throw Error('Not sender user found');

  // resetPassword(telegramId);
  return ctx.reply('A new password will be sent');
};

module.exports = getWebAccessToken;

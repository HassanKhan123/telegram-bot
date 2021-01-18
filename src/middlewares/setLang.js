const Languages = require('../languages');

// import { updateLanguage } from '../services/users';

const setPreferredLang = async (ctx) => {
  console.log('setPreferredLang ctx.message', ctx.message);
  if (!ctx || !ctx.message) throw Error('Not sender user found');

  const telegramId = (ctx.message.from && ctx.message.from.id) || 0;
  if (telegramId == 0) throw Error('Not sender user found');

  const lang = Languages.getByName(ctx.message.text || '');
  console.log(telegramId, lang);
  if (lang) {
    // await updateLanguage(telegramId, lang.code);
    return ctx.reply('Profile updated');
  } else {
    return ctx.reply('Select an available language');
  }
};

module.exports = setPreferredLang;

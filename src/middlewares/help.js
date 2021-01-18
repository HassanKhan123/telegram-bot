const help = (ctx) => {
  const user = ctx.message && ctx.message.from;

  return ctx.reply(`Available commands: \n /webaccess`, {
    parse_mode: 'MarkdownV2',
  });
};

module.exports = help;

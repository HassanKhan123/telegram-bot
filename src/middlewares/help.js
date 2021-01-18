module.export = help = (ctx) => {
  const user = ctx.message?.from;

  return ctx.reply(`Available commands: \n /webaccess`, {
    parse_mode: 'MarkdownV2',
  });
};

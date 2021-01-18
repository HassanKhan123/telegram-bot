// import Languages from '../languages';
// import { signUpOrUpdate, SignUpRequest } from '../services/users';

// const parseStartPayload = (ctx) => {
//   const c = ctx;
//   return { sponsorCode: c.startPayload };
// };

// const getUser = (msg) => {
//   if (!msg?.from) throw Error('Not sender user found');
//   return msg.from;
// };

// export const signUp = (ctx) => {
//   const { sponsorCode } = parseStartPayload(ctx);

//   const tgUser = getUser(ctx?.update?.message);

//   const request = {
//     telegramId: tgUser.id,
//     sponsorCode: sponsorCode,
//     firstName: tgUser.first_name,
//     lastName: tgUser.last_name || '',
//     languageCode: tgUser.language_code || Languages.Default.code,
//   };
//   console.log('SignUpMessage', request);

//   const sponsorLink = (link) => (link ? `Sponsor link:\n ${link}` : '');

//   return signUpOrUpdate(request)
//     .then((resp) => {
//       console.log(resp);
//       return ctx.reply(
//         'Account: ' + resp.account.id + '\n' + sponsorLink(resp.sponsorLink)
//         /*,
//                 {disable_web_page_preview: true, parse_mode: 'HTML'}*/
//       );
//     })
//     .catch((error) => {
//       console.log('signUp failed. request:', request, ' error:', error);
//       return ctx.reply('Problem processing your signup, please try it again.');
//     });
// };

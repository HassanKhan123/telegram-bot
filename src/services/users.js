// import fetch, { Response } from 'node-fetch';

// import Config from '../config';

// const apiUrl = Config.services.users.apiUrl;

// const defaultHeaders = {
//   'Content-Type': 'application/json',
// };

// const toJson = (res) => {
//   if (res.status != 200) throw new Error(res.statusText);
//   return res.json();
// };

// const toVoid = (res) => {
//   if (res.status != 200) throw new Error(res.statusText);
// };

// export const signUpOrUpdate = (payload) =>
//   fetch(apiUrl, {
//     method: 'PUT',
//     timeout: Config.services.users.timeout,
//     body: JSON.stringify(payload),
//     headers: defaultHeaders,
//   }).then((res) => toJson(res));

// export const updateLanguage = (telegramId, languageCode) =>
//   fetch(`${apiUrl}/tg/${telegramId}/personal-info`, {
//     method: 'PUT',
//     timeout: Config.services.users.timeout,
//     body: JSON.stringify({
//       languageCode,
//     }),
//     headers: defaultHeaders,
//   }).then(toVoid);

// export const resetPassword = (telegramId) =>
//   fetch(`${apiUrl}/password/reset`, {
//     method: 'PUT',
//     timeout: Config.services.users.timeout,
//     body: JSON.stringify({
//       telegramId,
//     }),
//     headers: defaultHeaders,
//   }).then(toVoid);

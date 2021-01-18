// import { promises as fs } from 'fs';

// export const Default = { code: 'eb', name: 'English' };

// let languages = null;
// let byName = null;
// let languageList = null;

// export const getByCode = (code) => {
//   const lang = languages ? languages[code] : null;
//   console.log('getByCode:', code);
//   return lang || Default;
// };

// export const getByName = (name) => {
//   const lang = byName ? byName[name] : null;
//   console.log('getByName:', name);
//   return lang || Default;
// };

// export const getNames = () => languageList || [];

// export const readFrom = async (fileName) => {
//   const str = await fs.readFile(fileName, 'utf-8');

//   const map = (json) => JSON.parse(json);

//   languages = map(str);
//   byName = mapBy(Object.values(languages), (lang) => lang.name.toUpperCase());

//   languageList = languages
//     ? Object.keys(languages)
//         .sort()
//         .map((code) => (languages ? languages[code].name : ''))
//     : [];

//   console.log('Languages:', languageList.length);
// };

// const mapBy = (list, getter) => {
//   const map = {};
//   for (const obj of list) {
//     const p = getter(obj);
//     map[p] = obj;
//   }
//   return map;
// };

// export default {
//   Default,
//   getByCode,
//   getByName,
//   getNames,
//   readFrom,
// };

import dictionary from './sowpods.txt';

const convertDict = () => {
  const dict_array = []
  fetch(dictionary)
    .then(t => t.text())
    .then(obj => dict_array.push(obj.split('\n')));

  return dict_array;
}

export { convertDict }


// async function convertDict() {
//   const obj = await WordlistToJSON('./lib/testdict.txt');
//   return obj;
// }
//
// const dict = convertDict();
// console.log(dict);
// const path = require('path');
// const fs = require('fs');
//
// const WordlistToJSON = (filePath, { value } = {}) => {
//   return new Promise( (resolve, reject) => {
//     const list = fs.readFile(filePath, (error, buffer) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//
//       const array = buffer.toString().split('\n');
//
//       // If the --value flag is present, create a JSONObject
//       // instead of a JSONArray
//       if (value) {
//         const output = {};
//         array.forEach( word => {
//           if (word) {
//             output[word] = value;
//           }
//         });
//         resolve(output);
//         return;
//
//       }
//
//       // If there are any trailing falsy values at the end
//       // of the JSONArray, remove them.
//       while(!array[array.length - 1]) {
//         array.pop();
//       }
//       resolve(array);
//     });
//   });
// }
//
// module.exports = WordlistToJSON;

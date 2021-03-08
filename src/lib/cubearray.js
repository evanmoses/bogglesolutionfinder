import _ from 'lodash';

const cube1 = ['D','W','S','N','E','O'];
const cube2 = ['R','L','C','S','E','A'];
const cube3 = ['F','X','R','B','O','I'];
const cube4 = ['E','I','V','T','G','N'];
const cube5 = ['Z','N','V','D','E','A'];
const cube6 = ['L','Y','K','G','E','U'];
const cube7 = ['N','K','D','T','O','U'];
const cube8 = ['H','R','S','M','O','A'];
const cube9 = ['M','O','Qu','A','B','J'];
const cube10 = ['S','P','T','L','E','U'];
const cube11 = ['A','T','C','O','A','I'];
const cube12 = ['R','W','G','L','U','I'];
const cube13 = ['T','A','Y','I','B','L'];
const cube14 = ['E','I','F','H','E','Y'];
const cube15 = ['D','A','M','C','E','P'];
const cube16 = ['P','I','N','H','E','S'];
const cubeArray = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16];

export const generateRandom = () => {
  const newArray = [...cubeArray]
  const letterArray = []
  const shuffledArray = _.shuffle(newArray)
  shuffledArray.forEach(cube => {
    console.log(cube)
    const letter = cube[Math.floor(Math.random()* cube.length)];
    console.log(letter);
    letterArray.push(letter);
  });
  return letterArray;
}

export default generateRandom;

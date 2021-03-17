import dictionary from './sowpods.txt';

const convertDict = async () => {
  const dictArray = await fetch(dictionary)
      .then(t => t.text())
      .then(obj => obj.split(/\r?\n/g));
  return dictArray;
}

const boardTransform = (rolledLetters) => {
  const smallAndQ = rolledLetters.map(letter => {
    if (letter === 'Qu') return 'q';
    return letter.toLowerCase();
  });

  const boardArray = () => {
    const array = []
    for (let i = 0; i<4; i+=1) {
      array.push(smallAndQ.splice(0,4).join(''))
    }
    return array;
  }
  return boardArray();
};

export { convertDict, boardTransform }

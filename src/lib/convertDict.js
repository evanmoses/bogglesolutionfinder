import dictionary from './sowpods.txt';

const convertDict = async () => {
  const dictArray = await fetch(dictionary)
      .then(t => t.text())
      .then(obj => obj.split(/\r?\n/g));
  return dictArray;
}

export { convertDict }

import dictionary from './sowpods.txt';

const convertDict = async () => {
  const fetchPromise = await fetch(dictionary)
      .then(t => t.text())
      .then(obj => obj.split('\n'));
  return fetchPromise;
}

export { convertDict }

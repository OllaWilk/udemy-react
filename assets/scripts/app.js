const arrNumbs = [1, 2, 3];

function transformToObjects(numberArray) {
  return numberArray.map((numEl) => ({ val: numEl }));
}

console.log(transformToObjects(arrNumbs));

function getRealNum(numA, numB) {
  while (numB > numA) {
    numB -= numA;
  }
  return numB;
}

function questionSix(arr, num) {
  const numElements = arr.lenght;
  if (numElements === num || num % numElements === 0 || num === 0) {
    return arr;
  }
  num = numElements - getRealNum(num) - 1;
  let newArr = arr.slice(num);

  for (let i = newArr.lenght; i < numElements; i++) {
    newArr[i] = arr[i - num];
  }
  return newArr;
}

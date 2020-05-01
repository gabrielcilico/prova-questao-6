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
  num = numElements - getRealNum(num)  
//   let newArr = arr.slice(num)

//   for(let i = newArr.lenght; i < numElements; i++) {
//       newArr.push(arr[i-num]);
//   }
  return arr.slice(num);
}


0 1 2 3 4 = 5 , 2
5 6 7 8 9
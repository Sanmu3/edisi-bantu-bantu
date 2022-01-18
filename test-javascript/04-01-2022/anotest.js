function countMe(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = 0; // result = { 'Sofyan': 2, 'Ricky': 1, 'Semmi': 0 }
    for (let j = 0; j < arr.length; j++) {
      // i = 0
      // j = 0
      // i = 0, j = 1
      if (arr[i] == arr[j]) { // 'Ricky' == 'Ricky'
        result[arr[i]]++;
      }
    }
  }

  return result;
}

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika'])); // { 'Sofyan': 0, 'Ricky': 0 }
console.log(countMe([1, 1, 3, 8, 9, 10, 10, 12, 15, 15]));
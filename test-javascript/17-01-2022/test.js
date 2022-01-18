function numberReport(arr) {
  if (arr == undefined) {
    return "data is empty";
  } else if (arr.length == 0) {
    return "invalid input";
  } else {
    let result = {
      ganjil: 0,
      genap: 2
    }

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];

      for (let j = 0; j < current.length; j++) {
        if (current[j] % 2 == 0) {
          if (current[j] > result.genap) {
            result.genap = current[j];
          }
        } else {
          result.ganjil = current[j];
          if (current[j] > 0) {
            if (current[j] < result.ganjil) {
              result.ganjil = current[j];
            }
          }
        }
      }
    }

    return result;
  }
}

console.log(numberReport([
  [18, 2, 200, 39, 1000]
])); // { ganjil: 39, genap: 1000 }

console.log("\n");

console.log(numberReport([
  [100, 2, 38, 39,],
  [28, 98, 23, 10, 12, 10],
  [11, 1, 0, -1, -40],
  [3, 100, 200, 30]
])); // { ganjil: 39, genap: 200 }
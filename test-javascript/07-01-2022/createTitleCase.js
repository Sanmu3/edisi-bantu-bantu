function toTitleCase(input) {
  let result = [];
  let current = '';

  for (let i = 0; i < input.length; i++) {
    current = '';
    for (let j = 0; j < input[i].length; j++) {
      if (j == 0) {
        current += input[i][j].toUpperCase();
      } else {
        current += input[i][j];
      }
    }
    result.push(current);
  }

  return result;
}

let _1 = toTitleCase(['deni', 'bagas', 'bagus', 'bugis']);
console.log(_1);
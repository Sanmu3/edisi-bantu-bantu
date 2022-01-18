function createDiagonal(str) {
  if (str.length == 0) {
    return "Invalid Input";
  } else if (str == undefined) {
    return "Error, no input detected";
  } else {
    let result = [];
    let current = str.length;

    for (let i = 0; i < str.length; i++) {
      let innerArr = [];
      current--;
      for (let j = 0; j < str.length; j++) {
        if (j == current) {
          innerArr.push(str[i]);
        } else {
          innerArr.push('*');
        }
      }
      result.push(innerArr);
    }
    return result;
  }
}

console.log(createDiagonal('dgjm'));
/*
[
  [ '*', '*', '*', 'd' ],
  [ '*', '*', '*', 'g' ],
  [ '*', '*', '*', 'j' ],
  [ '*', '*', '*', 'm' ]
]
*/
console.log(createDiagonal('abcdef'));
/*
 [
  [ '*', '*', '*', '*', '*', 'a' ],
  [ '*', '*', '*', '*', '*', 'b' ],
  [ '*', '*', '*', '*', '*', 'c' ],
  [ '*', '*', '*', '*', '*', 'd' ],
  [ '*', '*', '*', '*', '*', 'e' ],
  [ '*', '*', '*', '*', '*', 'f' ]
]
 */

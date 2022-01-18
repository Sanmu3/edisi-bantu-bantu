let password = "Aku akan menjadi seorang developer hebat";
let censoredLetters = "iljtp";
let censoredPassword;

for (let i = 0; i < censoredLetters.length; i++) {
  censoredPassword = '';
  for (let j = 0; j < password.length; j++) {
    if (password[ j ] == censoredLetters[ i ]) {
      censoredPassword += '#';
    } else if (password[ j ] == ' ') {
      censoredPassword += '';
    } else {
      censoredPassword += password[ j ];
    }
  }
  password = censoredPassword;
}

password; // Akuakanmen#ad#seorangdeve#o#erheba#

let yetAnotherPassword = "Aku akan menjadi seorang developer hebat";
let yetAnotherCensoredLetters = "iljtp";

const result = [ ...yetAnotherPassword ].map(letter => {
  return [ ...yetAnotherCensoredLetters ].indexOf(letter) != -1 ? letter = '#' : letter == ' ' ? letter = '' : letter;
});

console.log(result.join("")); // Akuakanmen#ad#seorangdeve#o#erheba#


// re-implement array.map();

function mapSelfImplement(callback, array) {
  let resultArr = [];

  for (const letter of array) {
    resultArr.push(callback(letter));
  }

  return resultArr;
}

let result2 = mapSelfImplement(letter => {
  return [ ...yetAnotherCensoredLetters ].indexOf(letter) != -1 ? letter = '#' : letter == ' ' ? letter = '' : letter;
}, [ ...yetAnotherPassword ]);

console.log(result2.join(""));

function scrambleNumber(str, opt) {
    let splitted = splitNumber(str); // [0852, 0212, 096'undefined']
    let reversed = reverseNumber(splitted);
    let changed = changeNumber(reversed, opt);

    return {
        str,
        opt,
        length: str.length,
        splitted,
        reversed,
        changed
    };
}

function splitNumber(str) {
    let idx = 0;
    let current = ''; // putaran pertama -> 0852, putaran kedua -> 0212
    let splittedArr = []; // putaran pertama -> 0852, putaran kedua -> 0852, 0212, 

    for (let i = 0; i < 3; i++) { // <-
        current = ''; // direset
        for (let j = 0; j < 4; j++) {
            if (str[ idx ] != undefined) {
                current += str[ idx ]; // 0 -> putaran 1, 8 -> putaran 2 -> index ke 3 -> string current isinya => 0852
                idx++; // idx = 1 => 3
            }
        }
        // current setelah 4 kali loop, current = '0852';
        splittedArr.push(current); // push di sini sebanyak 3 kali, push pertama 
    }

    return splittedArr;
}

function reverseNumber(input) { // [0852, 0212, 0962] -> [ 0962, 0212, 0852]
    let reversedArr = []; // [0962, 0212, 0852]
    let reversedString = ''; // 096202120852

    for (let i = input.length - 1; i >= 0; i--) {
        // putaran pertama i = 2
        // putaran kedua i = 1
        // putaran ketiga i = 0
        reversedArr.push(input[ i ]); // [index2, index1, index0]
    }

    for (let j = 0; j < reversedArr.length; j++) {
        // j = 0
        // reversedArr[j] = 0852
        reversedString += reversedArr[ j ];
        // for (let k = 0; k < reversedArr[j].length; k++) { // panjang dari 0852? = 4 buah string -> diputar 4 kali
        //   // k = 0
        //   // k = 1
        //   // k = 2
        //   // k = 3
        //   reversedString += reversedArr[j][k];
        // }
    }

    return reversedString;
}

function changeNumber(str, opt) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (opt == 'ganjil') {
            if (i % 2 == 1) {
                result += '#';
            } else {
                result += str[ i ];
            }
        } else if (opt == 'genap') {
            if (i % 2 == 0) {
                result += '#';
            } else {
                result += str[ i ];
            }
        }
    }

    return result;
}

// testing
const GANJIL = 'ganjil';
const GENAP = 'genap';

let _11Odd = scrambleNumber('08570212096', GANJIL);
let _11Even = scrambleNumber('08570212096', GENAP);

let _12Odd = scrambleNumber('081234565425', GANJIL);
let _12Even = scrambleNumber('081234565425', GENAP);

let arr = [ _11Odd, _12Odd, _11Even, _12Even ];

for (const [ index, item ] of arr.entries()) {
    console.log(`
  --  Iteration no ${index + 1}
      Initial value length: ${item.length}

  initial value: ${item.str}
  expected output in: ${item.opt}
  
  splitted value: [${item.splitted}]
  reversed value: ${item.reversed}
  changed value: ${item.changed}
  `)
}

/* EOF */
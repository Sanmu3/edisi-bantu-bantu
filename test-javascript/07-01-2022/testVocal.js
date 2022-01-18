function vocal(str) {
  let vocal = ['a', 'i', 'u', 'e', 'o'];
  let consonant = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 
    'k', 'l', 'm', 'n', 'p', 'q', 'r', 
    's', 't', 'v', 'w', 'x', 'y', 'z'
  ]
  let vocalCount = 0;
  let consonantCount = 0;
  let whitespace = 0;
  let notaLetter = str.length;
  let result = {
    huruf: {
      vokal: 0,
      konsonan: 0,
      "bukan-huruf (tanda baca)": 0,
      spasi: 0,
    },
    panjang: str.length
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      whitespace++;
    }

    for (let j = 0; j < vocal.length; j++) {
      if (str[i] == vocal[j]) {
        vocalCount++;
      }
    }

    for (let k = 0; k < consonant.length; k++) {
      if (str[i] == consonant[k]) {
        consonantCount++;
      }
    }
  }

  notaLetter -= vocalCount + consonantCount + whitespace;

  result = {
    ...result,
    huruf: {
      vokal: vocalCount,
      konsonan: consonantCount,
      "bukan-huruf (tanda baca)": notaLetter,
      spasi: whitespace
    }
  }
  
  console.log(result);
}

vocal('javascript!');
vocal('anak slamet dari kebumen');
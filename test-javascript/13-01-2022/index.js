const input = [
  "Aby,offBoard,E,G,Gold",
  "Bela,offBoard,E,F,Silver",
  "Kany,offBoard,E,S,Silver",
  "Sunny,offBoard,F,G,Gold",
  "Shew,offBoard,F,H,Silver",
  "Opp,offBoard,F,U,Silver"
]

function getPassengers(input) {
  const new_arr = [];
  const result = [];

  for (let i = 0; i < input.length; i++) {
    let current = '';
    new_arr[i] = [];
    for (let j = 0; j < input[i].length; j++) {
      const letter = input[i][j];
      
      if (letter == ',') {
        new_arr[i].push(current);
        current = '';
      } else if (j == input[i].length - 1) {
        new_arr[i].push(current + letter);
      } else {
        current += letter;
      }
    }
  }

  for (let i = 0; i < new_arr.length; i++) {
    const current_arr = new_arr[i];
    result.push({
      name: current_arr[0],
      status: current_arr[1],
      up: current_arr[2],
      land: current_arr[3],
      member: current_arr[4]
    });
  }
  return result;
}

// console.log(getPassengers(input));
function getDistance(psg) {
  const city = "ABCDEFGHIJKLMNOPQRSTUVWX";
  let distance = 0;

  for (let i = 0; i < psg.length; i++) {
    let current_up = 0;
    let current_land = 0;
    for (let j = 0; j < city.length; j++) {
      if (city[j] == psg[i].up) {
        current_up = j;
      } else if (city[j] == psg[i].land) {
        current_land = j;
      }
    }
    psg[i].distance =  current_land - current_up;
  }

  return psg;
}

// console.log(getDistance(getPassengers(input)));

function paymentInfo(psg) {
  for (let i = 0; i < psg.length; i++) {
    const current_psg = psg[i];
    switch (current_psg.member) {
      case 'Lite':
        current_psg.pay = current_psg.distance * 3800;
        break;
      case 'Silver':
        current_psg.pay = current_psg.distance * 3500;
        break;
      case 'Gold':
        current_psg.pay = current_psg.distance * 3200;
        break;
    }
  }

  return psg;
}

// console.log(paymentInfo(getDistance(getPassengers(input))));

function getDropped(psg) {
  let current_dest = '';
  const res = {};

  for (let i = 0; i < psg.length; i++) {
    current_dest = psg[i].land;
    if (res[current_dest] == undefined) {
      res[current_dest] = [];
    }
    if (psg[i].land == current_dest) {
      res[current_dest].push(psg[i]);
    }
    // console.log(res[current_dest]);

  }

  return res;
}

// console.log(getDropped(paymentInfo(getDistance(getPassengers(input)))));

function transportation(input) {
  
}
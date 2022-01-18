// 1.findDistance()
function findDistance(asal, tujuan) {
  const map = ['A', 'B', 'C', 'D', 'E', 'F'];
  let asalIdx = 0;
  let tujuanIdx = 0;

  for (let i = 0; i < map.length; i++) {
    if (map[i] == asal) {
      asalIdx = i;
    } else if (map[i] == tujuan) {
      tujuanIdx = i;
    }
  }

  return tujuanIdx - asalIdx;
}

// console.log(findDistance('A', 'F')); // 5
// console.log(findDistance('D', 'E')); // 1

// 2.cost()
function cost(jarak, kendaraan) {
  const cost = {
    'bike': 2000,
    'car': 5000
  }

  if (kendaraan == 'bike') {
    return cost.bike * jarak;
  } else if (kendaraan == 'car') {
    return cost.car * jarak;
  }
}

// console.log(cost(5, 'bike')); // 10000
// console.log(cost(5, 'car')); // 25000

// 3.customerHistory

let customers = [
  [ 'Ardi', 'A-C', 'car' ],
  [ 'Patra', 'B-C', 'bike' ],
  [ 'Bagus', 'B-E', 'bike' ],
  [ 'Idam', 'A-E', 'car' ]
]

function customerHistory(data) {
  const history = {};

  for (let i = 0; i < data.length; i++) {
    const vehicle = data[i][2];
    const from = data[ i ][ 1 ][ 0 ];
    const to = data[ i ][ 1 ][ 2 ];
    const distance = findDistance(from, to);
    const cost_history = cost(distance, vehicle);

    history[data[i][0]] = {
      'kendaraan': vehicle,
      'asal': 'Kota ' + from,
      'tujuan': 'Kota ' + to,
      'jarak': distance + ' Kota',
      'ongkos': 'Rp.' + cost_history
    }
  }

  return history;
}

console.log(customerHistory(customers));
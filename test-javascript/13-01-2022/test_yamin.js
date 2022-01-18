function checkoutCart(duit, mangga, apel, pisang) {
  const item_stock = [mangga, apel, pisang];

  const price = [10_000, 7_000, 5_000];
  
  const cart = {
    mango: 0,
    apple: 0,
    banana: 0
  }

  const cashback = [1_000, 2_000, 3_000, 4_000, 5_000];

  for (let i = 0; i < item_stock.length; i++) { // loop 3 kali atau sebanyak barang
    let price_per_item = 0; // -> 20_000
    console.log(item_stock[i]);
    for (let j = 0; j < item_stock[i]; j++) { //  stock = 3
      // if (duit < price[i]) { // duit = 15k - harga = 10000 -> x
      //   break;
      // }

      // if (price_per_item > duit) { // price = 20_000
      //   break;
      // }

      if (duit < price[i]) {
        break;
      }

      price_per_item += price[i]; // 10_000 + 10_000 = 20_000
      switch (i) {
        case 0:
          cart.mango++; // mango 2
          break;
        case 1:
          cart.apple++;
          break;
        case 2:
          cart.banana++;
          break;
      }
      duit -= price[i]; // 5000
    }
    console.log(price_per_item, "harga");
    console.log(duit, "duit");
  }

  let out = `dapat membeli ${cart.mango}x mangga, ${cart.apple}x apel, ${cart.banana}x pisang dan sisa uang adalah ${duit} `

  if ((cart.mango + cart.apple + cart.banana) > 5) {
    const random = Math.floor(Math.random() * cashback.length); // 0 - 1 -> 0.1 0.9864123
    out += `dan mendapatkan cashback ${cashback[random]}`
  }

  return out;
}

console.log(checkoutCart(25_000, 3, 2, 2));
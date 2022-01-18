(function (arrNumber) {
  let biggestInt = arrNumber[arrNumber.length - 1];
  let counter = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] == biggestInt) {
      counter += 1;
    }
  }
  console.log(`The arr: [${arrNumber}]`);
  console.log(`
    biggest number: ${biggestInt}
    appears ${counter} times
  `)
})([2, 3, 4, 5, 6, 7, 8, 8, 8]);

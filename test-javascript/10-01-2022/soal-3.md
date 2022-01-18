# `ADVANCE OJEK ONLINE`

### `NOTES`

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__` dan `testHelpers`, folder-folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

---

## `Objectives`

- Mampu menyelesaikan masalah yang diberikan
- Mampu menggunakan `loop`, `nested loop`, `conditional` atau `advance conditional`
- Mampu membuat dan mengisi property `object`
- Mampu mengakses `array`
- Mampu menggunakan `modular function`

## `Directions`

Kali ini kalian diminta untuk menampilkan data dari setiap passenger ojek online.<br>
Kalian diberikan sebuah variable `data` yang berupa array multidimensi yang setiap array didalamnya memiliki element `nama customer`, `asal kota - kota tujuan` dan `kendaraan yang digunakan`.<br>
Selain itu kalian juga diberikan 3 buah function yaitu `cost`, `findDisatance` dan `customerHistory` dengan keterangan berikut:

---

1. `findDistance()`
  pada function ini kalian diminta untuk menghitung jarak atau jumlah kota yang dilewati oleh customer.<br>
  mis. asal kota customer adalah "A" dan kota tujuan adalah "D", maka jarak atau jumlah kota yang dilewati adalah 3 kota.

example :
```js
funcion findDistance(asal, tujuan){
  let map = ['A', 'B', 'C', 'D', 'E', 'F']
  // Write your code here
}

console.log(findDistance('A', 'F')) // 5
console.log(findDistance('D', 'E')) // 1
```

---

2. `cost()`
  pada function ini kalian diminta untuk menghitung biaya yang harus dikeluarkan oleh customer.
    - jika customer menggunakan `car` maka setiap kota yang dilewatinya akan dikenakan biaya 5000
    - jika customer menggunakan `bike` maka setiap kota yang dilewatinya akan dikenakan biaya 2000

example :
```js
function cost(jarak, kendaraan){
  // Write your code here
}

console.log(cost(5, 'bike')) // 10000
console.log(cost(5, 'car')) // 25000
```

---

3. `customerHistory()`
  pada function ini kalian diminta untuk mengubah data yang diterima dari array multidimensi menjadi sebuah object multidimensi dengan nama customer sebagai key utama yang memiliki isi berupa object dengan key `kendaraan`. `asal`, `tujuan`, `jarak`, dan `ongkos`

example :
```js
function customerHistory(data){
  // write your code here ...
}


let customers = [
  ['Ardi', 'A-C', 'car'],
  ['Patra', 'B-C', 'bike'],
  ['Bagus', 'B-E', 'bike'],
  ['Idam', 'A-E', 'car']
];

console.log(customersHistory(customers))
/*
{
  Ardi: {
    kendaraan: 'car',
    asal: 'Kota A',
    tujuan: 'Kota C',
    jarak: '2 Kota',
    ongkos: 'Rp.10000'
  },
  Patra: {
    kendaraan: 'bike',
    asal: 'Kota B',
    tujuan: 'Kota C',
    jarak: '1 Kota',
    ongkos: 'Rp.2000'
  },
  Bagus: {
    kendaraan: 'bike',
    asal: 'Kota B',
    tujuan: 'Kota E',
    jarak: '3 Kota',
    ongkos: 'Rp.6000'
  },
  Idam: {
    kendaraan: 'car',
    asal: 'Kota A',
    tujuan: 'Kota E',
    jarak: '4 Kota',
    ongkos: 'Rp.20000'
  }
}
*/
```
<br>


Buatlah implementasi JavaScript-nya!

___

## `TEST CASE`

```js
function customerHistory(data){
  // write your code here ...
}

console.log(customerHistory(data));
/*
{
  Alvin: {
    kendaraan: 'car',
    asal: 'Kota A',
    tujuan: 'Kota B',
    jarak: '1 Kota',
    ongkos: 'Rp.5000'
  },
  Ridza: {
    kendaraan: 'bike',
    asal: 'Kota A',
    tujuan: 'Kota C',
    jarak: '2 Kota',
    ongkos: 'Rp.4000'
  },
  Ganang: {
    kendaraan: 'bike',
    asal: 'Kota D',
    tujuan: 'Kota E',
    jarak: '1 Kota',
    ongkos: 'Rp.2000'
  },
  Xavier: {
    kendaraan: 'car',
    asal: 'Kota A',
    tujuan: 'Kota F',
    jarak: '5 Kota',
    ongkos: 'Rp.25000'
  },
  Ganda: {
    kendaraan: 'bike',
    asal: 'Kota A',
    tujuan: 'Kota F',
    jarak: '5 Kota',
    ongkos: 'Rp.10000'
  },
  Rian: {
    kendaraan: 'car',
    asal: 'Kota B',
    tujuan: 'Kota C',
    jarak: '1 Kota',
    ongkos: 'Rp.5000'
  }
}
*/

console.log(customerHistory([]));
// Data not found!

console.log(customerHistory());
// Invalid data
*/
```
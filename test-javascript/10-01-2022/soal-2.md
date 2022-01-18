# `Nama Bayi`

## `Objective`

- Mampu memecahkan masalah yang diberikan
- Bisa menggabungkan konsep *looping* / *iteration* dan *kondisional*
- Mampu mengolah type data Array
- Mengerti *keterhubungan* satu function dengan function lainnya

## `Direction`

Kamu akan diberikan list nama yang akan dipakai untuk menamai bayi-bayi yang baru lahir.  <br>
Tugas kamu adalah mengelompokkan setiap nama berdasarkan benua asalnya dan menghapus kode benua pada setiap nama. <br><br>

Kalian akan diberikan 2 buah function, _groupingByContinent_ dan _getName_

1. _groupingByContinent_ merupakan sebuah function yang berfungsi untuk untuk mengelompokkan nama berdasarkan benua asalnya. <br>
function _groupingByContinent_ ini menerima 1 buah parameter berupa *array of string*,<br>setiap nama yang diterima memiliki kode benua dibagian belakangnya,
berikut arti dari kode-kode tersebut :
- AS : Asia
- AF : Afrika
- AM : Amerika
- AU : Australia
- ER : Eropa

```js
function groupingByContinent(names) {
    // Write your code here
}

const names = ["Dito-ER", "Bagus-AS", "Ardi-AU", "Andrean-AF", "Idham-AM", "Terry-AM", "Patra-AF"]
let groupNames = groupingByContinent(names)
console.log(groupNames)
/* 
Output :
{
    Asia: ["Bagus"],
    Afrika: ["Andrean", "Patra"],
    Amerika: ["Idham", "Terry"],
    Eropa: ["Dito"],
    Australia: ["Ardi"]
}
*/
```


2. _getName_ merupakan function yang fungsi untuk menghapus kode - kode yang menempel pada nama
```js
function getName(name) {
    // Write your code here
}
console.log(getName("Esmeralda-ER")); // Esmeralda
```
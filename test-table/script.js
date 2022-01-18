const theadRow = document.querySelector("thead tr th#checkbox-all");

const tbodyRows = document.querySelectorAll("tbody tr");
const tbodyRowsKeys = Object.keys(tbodyRows);

// var tbodyFirstDatas = [];

for (let keys of tbodyRowsKeys) {
  console.log(tbodyRows[keys].firstElementChild);
}
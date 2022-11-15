let data = [
  {
    nama: "avanja",
    brand: "toyota",
    mechine: "DOHC",
    cc: 1500,
  },
  {
    nama: "supra",
    brand: "toyota",
    mechine: "V8",
    cc: 5000,
  },
  {
    nama: "ertiga",
    brand: "suzuki",
    mechine: "DOHC",
    cc: 1550,
  },
];

// mengunakan looping biasa
/*
function print(data, cb) {
  let hasil = "";
  if (cb) {
    for (i = 0; i < data.length; i++) {
      if (cb(data[i])) {
        return `${i + 1}. ${data[i].brand} ${data[i].nama} with ${data[i].mechine} ${data[i].cc}`;
      }
    }
  } else {
    for (i = 0; i < data.length; i++) {
      hasil += `${i + 1}. ${data[i].brand} ${data[i].nama} with ${data[i].mechine} ${data[i].cc}\n`;
    }
  }
  return hasil;
}

function filterNama() {
  return (obj) => obj.nama == "avanja";
}

console.log(print(data, filterNama()));
*/

// menggunakan foreach

// let print = () => {
//   data.forEach(function (arr, i) {
//     console.log(`${i + 1} ${arr.brand} ${arr.nama} with ${arr.mechine} ${arr.cc.toLocaleString()}`);
//   });
// };
// print();

// menggunakan map
// let print = () => {
//   data.map(function (arr, i) {
//     console.log(`${i + 1} ${arr.brand} ${arr.nama} with ${arr.mechine} ${arr.cc.toLocaleString()}`);
//   });
// };
// print();

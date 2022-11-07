/*
// luas persegi panjang

let luas = (panjang, lebar) => {
  return panjang * lebar;
};
console.log(luas(4, 5));

// keliling persegi panjang

let keliling = (panjang, lebar) => {
  return panjang * lebar;
};
console.log(keliling(4, 5));

 // diameter lingkaran = 2 * jari-jari

 let diameter = (jariJari) => {
  return 2 * jariJari;
};

console.log(diameter(5));


// luas lingkaran = PI * (r*r)

const phi = 3.14;
let r = 2;
let L = phi * (r * r);

console.log("Luas: " + L);

// keliling lingkaran

const phi = 3.14;

let keliling = (r) => {
  return phi * r * 2;
};
console.log("keliling: " + keliling(2));


// menghitung hari

let angka = 396; //prompt("input day"); ex: 485

let tahun = Math.floor(angka / 365); // 485/365= 1(pembulatan)

let sisaBulan = angka - tahun * 365; //485- (1*365)=125
//let sisaBulan = angka % 365;  cara kedua

let bulan = Math.floor(sisaBulan / 30); // 125/30= 4 (pembulatan)

let sisaHari = sisaBulan - bulan * 30; //125 - (4*30) = 5
//let sisaMinggu = sisaBulan % 30; (cara kedua)

console.log(`${angka} hari = ${tahun} tahun, ${bulan} bulan,${sisaHari} hari `);
*/

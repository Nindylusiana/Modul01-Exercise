//  function to check if two objects are equal
// cara 1 dengan menggunakan stringify
// let a = { nama: "yes", number: 1 };
// let b = { nama: "yes", number: 1 };

// let ubahA = JSON.stringify(a).trim();
// let ubahB = JSON.stringify(b).trim();

// console.log(ubahA == ubahB);

//cara 2 (nilainya ttp true walaupun urutannya diubah)

// let compare = (a, b) => {
//   let aKeys = Object.keys(a);
//   let bKeys = Object.keys(b);

//   if (aKeys.length != bKeys.length) {
//     return false;
//   }

//   for (let objKey of aKeys) {
//     if (a[objKey] !== b[objKey]) {
//       return false;
//     }
//   }
//   return true;
// };

// let a = { number: 1, nama: "yes" };
// let b = { nama: "yes", number: 1 };

// console.log(compare(a, b));

// intersection

// let obj1 = { x: 0, y: 1, z: 2, a: 1, b: 2, e: 3 };
// let obj2 = { x: 0, y: 1, z: 2, a: 1, c: 2, d: 3 };

// return just key
// function intersection(a, b) {
//   return Object.keys(a).filter({}.hasOwnProperty.bind(b));
// }
// result [ 'x', 'y', 'z', 'a' ]

// return with value
// function intersection(a, b) {
//   return Object.keys(a).reduce((x, y) => (b.hasOwnProperty(y) ? { ...x, [y]: b[y] } : x), {});
// }
// console.log(intersection(obj1, obj2));
//result { x: 0, y: 1, z: 2, a: 10 }

// let array1 = ["a", "b", "c"];
// let array2 = ["c", "c", "d", "e"];

// merge array tanpa duplikat
// let array1 = [
//   { name: "student1", email: "student1@gmail.com" },
//   { name: "student2", email: "student2@gmail.com" },
// ];
// let array2 = [
//   { name: "student1", email: "student1@gmail.com" },
//   { name: "student3", email: "student3@gmail.com" },
// ];

// let names = new Set(array1.map((d) => d.name));
// let merge = [...array1, ...array2.filter((d) => !names.has(d.name))];

// console.log(merge);

// switch value

// let arr = [{ name: "David", age: 20 }];

// let switchArr = (arr) => {
//   let x;
//   let keys = [];
//   for (let i = 0; i < arr.length; i++) {
//     let data = arr[i];
//     for (let key in data) {
//       x = key;
//       key = data[key];
//       data[key] = x;
//       delete data[x];
//     }
//     keys.push(data);
//   }
//   return keys;
// };
// console.log(switchArr(arr));

// factorial number

// function factorial(number) {
//   if (number == 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }
//meminta data dari user
// let angka = parseInt(prompt("input angka: "));

// console.log(factorial(angka));

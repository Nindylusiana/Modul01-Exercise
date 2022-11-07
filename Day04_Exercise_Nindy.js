// for (var i = 4; i >= 1; i = i - 1) {
//   for (var j = 4; j >= i; j = j - 1) {
//     console.log(j);
//   }
//   //i want this to print a new line
//   //   console.log("<br>");
// }

// fizzbuss

// let n = prompt(`input number:`);
// for (let i = 1; i < n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 == 0) {
//     console.log("buzz");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

// BMI

// kurang 18.5 = less weight
// 18.5 - 24.9 = ideal
// 25.0 - 29.9 = overweight
// 30.0 - 39.9 = very overweight
// 40 keatas   = obesity

// BMI = (weight(kg)/height(m))*pangkat 2

// let berat = parseInt(prompt("berat badan?"));
// let tinggi = parseInt(prompt("tinggi badan?"));

// let tinggiM = tinggi / 100;

// let index = berat / Math.pow(tinggiM, 2);

// if (index < 18.5) {
//   alert(" less weight!");
// } else if (index >= 18.5 && index <= 24.9) {
//   alert("ideal!");
// } else if (index >= 25.0 && index <= 29.9) {
//   alert(" over weight!");
// } else if (index >= 30.0 && index <= 39.9) {
//   alert(" very overweight!");
// } else {
//   alert("obesity!");
// }

//remove odd number

// let array = [1, 3, 5, 7, 9, 2, 4, 6, 8];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++)
//     if (array[j] % 2 === 0) {
//       array.splice(j);
//       break;
//     }
// }

// console.log(array);

// split string

// let split = (str) => {
//   return str.trim().split(" ");
// };
// console.log(split("helo word"));

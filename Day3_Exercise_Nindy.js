// fizzbuzz
/*
let angka = 90;
for (let i = 1; i <= angka; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz -->" + i);
  } else if (i % 5 == 0) {
    console.log("buzz -->" + i);
  } else if (i % 3 == 0) {
    console.log("fizz -->" + i);
  }
}
*/

// multiplication table

// let angka = 8;

// for (let i = 1; i <= 10; i++) {
//   let result = i * angka;

//   console.log(`${angka} * ${i} = ${result}`);
// }

// // check palindrome

// function checkPalindrome(string) {
//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "Ini bukan palindrome";
//     }
//   }
//   return "Ini palindrome";
// }

// let string1 = "madam";

// let value = checkPalindrome(string1);

// console.log(value);

// // cm --> km

// let cm = 400000;

// let km = Math.round(cm / 100000);
// console.log(km);

// // format currency

// let rupiah = (number) => {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//   }).format(number);
// };
// console.log(rupiah(30000));

// // replace world

// let str = "Hello world";

// newStr = str.replace("wo", "");

// console.log("Original String: ", str);
// console.log("After character removed: ", newStr);

// // uppercase first word

// const string = "hello world saja";

// const arr = string.split(" ");

// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// const string2 = arr.join(" ");
// console.log(string2);

// // reverse string

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reverseString("nindy"));

// huruf vocal

let kalimat = "purwadhika";

let sentenceA = kalimat.toLocaleLowerCase();

let vokal = "";
let konsonan = "";

let hurufVokal = "aiueo";
let hurufKonsonan = "bcdfghjklmnpqrstvwxyz";

for (i = 0; i < hurufVokal.length; i++) {
  if (sentenceA.includes(hurufVokal[i])) {
    vokal += hurufVokal[i];
  }
}
for (i = 0; i < hurufKonsonan.length; i++) {
  if (sentenceA.includes(hurufKonsonan[i])) {
    konsonan += hurufKonsonan[i];
  }
}
console.log(kalimat);
console.log("huruf vocal=", vokal);
console.log("huruf konsonan=", konsonan);

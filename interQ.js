let array = [2, 4, 4, 5, 5, 7, 8, 9];

// let duplecat = [];
// for (let i = 0; i < array.length; i++) {
//   let dup = false;
//   for (let j = 0; j < duplecat.length; j++) {
//     if (array[i] == duplecat[j]) {
//       dup = true;
//       break;
//     }
//   }
//   if(!dup){
//     duplecat.push(array[i])
//   }
// }
// console.log(duplecat);

// let rev = [];
// for (let i = array.length - 1; i >= 0; i--) {
//   rev.push(array[i]);
// }
// console.log(rev);

// Count the frequency of each element in an array.===================
// let fre = {};
// for (let i = 0; i < array.length; i++) {
//   let item = array[i];
//   if (fre[item]) {
//     fre[item]++;
//   } else {
//     fre[item] = 1;
//   }
// }
// console.log(fre);

// minmum Element in Array
// let min = array[0]
// for(let i = 0; i < array.length; i++){
//     if(array[i] < min){
//         min = array[i]
//     }
// }
// console.log(min);

// maxmum Element in Array
// let max = [0]
// for(let i = 0; i < array.length; i++){
//     if(max < array[i]){
//         max = array[i]
//     }
// }
// console.log(max);

// duplicat Element in Array
// let duplecat = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] == array[j]) {
//       duplecat.push(array[i]);
//     }
//   }
// }
// console.log(duplecat);

// common Number in two Array =========================
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = [6, 7, 8, 9];
// let comm = [];
// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array1.length; j++) {
//     if (array1[i] === array2[j]) {
//       let dup = false;
//       for (let k = 0; k < comm.length; k++) {
//         if (comm[k] == array1[i]) {
//           dup = true;
//           break;
//         }
//       }
//       if (!dup) {
//         comm.push(array1[i]);
//       }
//     }
//   }
// }
// console.log(comm);

// Rotate an array by k positions.============
// let array = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// let rotatedArray = [];
// for(let i = array.length-k ; i< array.length; i++){
//   rotatedArray.push(array[i])
// }
// for(let i =0 ; i < array.length -k; i++){
//   rotatedArray.push(array[i])
// }
// console.log(rotatedArray);

// Find the missing number in an array of 1 to n.=============
// let missingElem = [];
// for (let i = 1; i < array.length ; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] == array[j]) {
//       missingElem.push(i);
//     }
//   }
// }
// console.log(missingElem);

// ********************************************************

// let str = "hallo World";
// let dup = [];
// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j < str.length; j++) {
//     if (str[i] == str[j]) {
//       dup.push(str[i]);
//     }
//   }
// }
// let element = { ...dup };
// console.log(element);

// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// console.log(rev);

// Check if a string is a palindrome.=======

// let str = "madam"
// let rev = ""
// for(let i = str.length - 1 ; i >= 0 ; i--){
//   rev += str[i]
// }
// if(str == rev){
//   console.log("this is palindrome");
// }else{
//   console.log("not palindrome");
// }

// ========================fre
// let str = "helloo";
// let fre = {};
// for (let i = 0; i < str.length; i++) {
//   let item = str[i];
//   if (fre[item]) {
//     fre[item]++;
//   } else {
//     fre[item] = 1;
//   }
// }
// console.log(fre);

// Count the number of vowels in a string.==============
// let strig = "amithero";
// let vowels = "aeiou";
// let count = 0;
// for (let i = 0; i < strig.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//     if (strig[i] === vowels[j]) {
//       count++;
//       break;
//     }
//   }
// }
// console.log(count);

// Replace all spaces in a string with %.=================
// let string = "hello worle how are you";
// let temp = "";
// for (let i = 0; i < string.length; i++) {
//   if (string[i] == " ") {
//     temp += "&";
//   }else{
//     temp += string[i]
//   }
// }
// console.log(temp);

// Find the longest substring without repeating characters.
// let string = "hello how are you puneet ";
// let longest = "";
// let cureent = "";
// for (let i = 0; i < string.length; i++) {
//   if (string[i] !== " " && i !== string.length) {
//     cureent += string[i];
//   } else {
//     if (cureent.length > longest.length) {
//       longest = cureent;
//     }
//     cureent = "";
//   }
// }
// console.log(longest);

// Convert the first letter of each word in a string to uppercase.
// let string = "hello how are you";
// let upperStr = "";
// let isnewWord = true;

// for (let i = 0; i < string.length; i++) {
//   if (string[i] === " ") {
//     upperStr += " ";
//     isnewWord = true;
//   } else {
//     if (isnewWord) {
//       upperStr += string[i].toUpperCase()
//       isnewWord = false
//     }else{
//       upperStr += string[i]
//     }
//   }
// }
// console.log(upperStr);

// let str = "hello how are you";
// let result = "";
// let word = "";

// for (let i = 0; i <= str.length; i++) {
//   if (i === str.length || str[i] === " ") {
//     // Manually reverse the word and append to result
//     for (let j = word.length - 1; j >= 0; j--) {
//       result += word[j];
//     }
//     if (i !== str.length) {
//       result += " ";
//       word = "";
//     }
//   } else {
//     word += str[i];
//   }
// }

// console.log(result);

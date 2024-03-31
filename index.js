const car = ["sushant", "vrushali", "Baba", "Aai"];

let carName = "volvo",
  person = "aman",
  rate = 200;

let x = 0;
let x = 1;

var s = "sushant";
var s = 0;

var x = 2; // Allowed
let x = 3; // Not allowed

{
  let x = 2; // Allowed
  let x = 3; // Not allowed
}

{
  let x = 2; // Allowed
  var x = 3; // Not allowed
}

// document.getElementById('demo').innerHTML=person1.age

// let str="sushant,mit, vrushali, sanjay, snehal"

//  console.log(str.slice(8,12));
//  let text = "Apple, Banana, Kiwi";
// let part = text.slice(-5);
// console.log(part)

// let test ="     suahanayt     ";
//  console.log(test);
//  console.log(test.trimStart());

//  console.log(test.repeat(6));

// let test ="sushant don";
// let result=test.split(" ");
// console.log(result);

// let text = "Please locate where 'locate' occurs!";
//  console.log(text.indexOf("locate"));

// let firstName="sushant";   //templte string
// let lastName ="patil";

// let fullname=`My Name ${firstName} and ${lastName}`;
// console.log(fullname);

// function reverserString( str){

//     let s= str.split("").reverse().join("");
//     return s;
// }
// console.log(reverserString("Sushant"));

// const str="hellow amboli";

// function reverse(str){
//     let f="";

//     for(let i=str.length-1 ; i>=0 ;i++){
//         f+=str.charAt(i);
//     }

//     return f;
// }

// console.log(reverse(str));
//==================================================================================================

//remove duplicated element

function RemoveDuplicate(arr) {
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 0) {
      duplicate.push(arr[i]);
    }
  }
  return duplicate;

  let count = 0;
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;

        break;
      }
    }
  }
  return duplicate;
}

const arr = [1, 2, 2, 2, 2, 5, 5, 6, 8, 8, 8, 1, 8];

console.log(RemoveDuplicate(arr));

//==========================================================================================
//reversed every word in string
let str = "my new iphone 13 pro";

let str1 = "";
let word = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    word = str[i] + word;
  } else {
    str1 += word + " ";
    word = "";
  }
}

str1 += word;
console.log(str);
console.log(str1);
//===============================================================================================

//sorting array
const arr = [1, 52, 96, 36, 2, 7, 4, 5, 5];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);
//===================================================================================
//finding the count of charcter repeated
let str = "abbbcccddd";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    count++;
  }
}
console.log("c is count:", count);

//========================================================================================================

//Remove element from array
const arr1 = [1, 5, 6, 3, 58, 9, 6];
const b = [];
let index = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== 58) {
    b[index++] = arr1[i];
  }
}
console.log(b);

//=============================================================================================================
//Find the length of array
const arr = [1, 5, 6, 3, 2, 4, 8, 9, 6, 3, 2, 5];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  count++;
}
console.log(arr.length);
console.log("Array length", count);

//============================================================================================================
//Finding the index if element
const arr = [10, 5, 6, 9, 7, 8, 2, 3];
let num = 7;
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    index = i;
  }
}
console.log("num of index:", index);
//==================================================================================================
// splite mwthod and reverserd every word fromn array
let str = "we are a family";
let str1 = "";
let str2 = [];
let index = 0;
let word = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    word += str[i];
  } else {
    str2[index++] = word + " ";
    word = "";
  }
}
str2[index++] = word;
console.log(str2);
let word2 = "";
let arr3 = [];
let index2 = 0;
for (let i = 0; i < str2.length; i++) {
  let s = str2[i];
  let notpad = "";

  for (let j = s.length - 1; j >= 0; j--) {
    notpad += s[j];
  }
  arr3.push(notpad);
}
console.log(arr3);

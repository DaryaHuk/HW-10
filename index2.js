№1
const string = '55639217';
let str = '';
const array = [];
str = string.split('');

for (let i = 0; i < str.length; i++) {
  array.push(str[i]);
  if (str[i] % 2 && str[i+1] % 2) {
    array.push(':');
  }  
}
str = array.join('');
console.log(str);

// №1 (2вариант)
// const str = '55639217'; 
// let result;

// function Colon (strArr){
// strArr = str.split('');
//     for (let i = 1; i < strArr.length; i++) {
//         if ( strArr[i-1] % 2 != 0 && strArr[i] % 2 !=0) {
//             strArr.splice(i, 0, ':');
//             i++;
//         }
//     }
//     strArr = strArr.join('');
//     return strArr;   
// }
//     alert(Colon ('55639217'))


// №3???
// const array = [7, 5, 8, 7, 9, 5, 14];

// const uniqArray = Array.from(new Set(array)); 
// console.log(uniqArray);

// №4
// const array = [7, 5, 8, 7, 9, 5, 14];

// const removeItem = (arr, num) => {
//   arr.splice(num, 2)
//   return arr
// }

// console.log(removeItem(array,2));

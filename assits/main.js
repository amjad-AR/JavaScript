// let x = 5;
// let y = 4;
// let z = 8;
// let max;
// if (x > y && x > y) {
//     max = x
// } else if (y > x && y > z) {
//     max = y;
// } else {
//     max = z
// }

// console.log(max)

// function summing(num) {
//     if (num % 2 == 1) {
//         // let num1 = num;
//         if (num > 0) {
//             let i = 0;
//             let num2 = 0;
//             while (i < num) {
//                 num2 += num2 + 1;
//                 if (i == num) {
//                     break
//                 }
//             }
//             return num2
//         } else {
//             return 0;

//         }
//     } else {
//         console.log("this number is not Prime number")
//     }
// }
// console.log(summing(5));

/*----------------------------------------------------------------------*/
/*----------------- Q-1 ------------------------------------------*/
/*
function perfect(num) {
    let i = 1;
    let res = 0;
    while (i <= num) {
        if (num % i == 0) {
                res +=i
            }
            i++;
        if (num == i) {
            break;
        }
    }
    
    
    if (res == num) {
        return `${num} is a perfect number`
    } else {
        `${num} is not a perfect number`
    }
    return res
    }


console.log(perfect(5));
*/

/*----------------------------------------------------------------------*/
/*----------------- Q-2 ------------------------------------------*/
/*
function isPlaindrom(num) {
    if(num.math)
}

    */

/*-------------------------------------------------------------------*/
/*-------------------Q-3---------------------------------------------*/
/*
function difirent(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max); {
            max = arr[i]

        } if (arr[i] < min) {
            min = arr[i]
        } 
    } 
    return max - min
}
let arr = [1, 3, 9, 5];
console.log(difirent(arr));
// difirent(arr);
*/

/*---------------------------------------------------------------------*/
/*-------------- Q-3 --------------------------------------------------*/
/*
function changeTheLetter(str, cha) {
  let arr = ["a", "e", "i", "u", "o"];
  let res = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++)
      if (str[i] == arr[j]) {
          res += cha;
          break
      } else {
          res += str[i];
          break
      }
  }
  return res;
}
console.log(changeTheLetter("amjad", "*"));
*/

/*-----------------------------------------------------------------*/
/*------------Q-4-------------------------------------*/
/*
function isVowle(str) {
  let arr = ["a", "e", "i", "u", "o"];
//   let res ;
    for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++)
        if (str[i] === arr[j]) {
            // res += str[i];
            return i 
            // break
            } 
      
  }
//   return res;
}
console.log(isVowle("amjad"));
*/

/*---------------------------------------------------------------*/
/*-------------------Q-5-----------------------------------------*/
// function counter(str, num) {
//     let arr = ["a", "e", "i", "u", "o"];

// }
// console.log(counter("amjad", 2));

// ///////////////////////////////////
// ///////////////////////////////////
// ///////////////////////////////////
// let str = "Hello\nAmjad\t:)";
// let num = 333;
// let dicNum = 18.1;

// console.log(str)

// let file = "c:\Users\PC18\Desktop\our-company\Our-Company-project"
// console.log(`file:///${file.replace(/\\/g, "/")}`);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

// let age = 22;
// let str = "amjad";
// console.log(`my name is ${str} and I am ${age} years old`);
// console.log("my name is " + str + " and I am " + age + " years old");

// let num = 100;
// let str = "100";
// let sum = num + Number(str);
// console.log(sum);

// let num1 = 5;
// let num2 = 3;
// let avg = (num1 + num2) / 2;
// console.log(avg);
// let arr = [num1, num2];
// let avg2 ;
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }

// avg2 = sum / arr.length;
// console.log(avg2);

// let arr = ["amjad", "ahmad", "rita", "nour"];
// arr.splice(1,1);
// arr.push("adnan");
// arr.unshift("hamza");
// arr.splice(arr.length, 0 , "tahseen")
// console.log(arr);

// let str = "hello may name Is amjad alaranji";
// let arr = str.split(" ", 2);
// console.log(arr);

// let newArr = ["hello", "world"];
// let newStr = newArr.join(" ")
// console.log(newStr)

// let Arr = [1, 2, 3];
// let Str = JSON.stringify(Arr);
// console.log(Str); // "[1,2,3]"
/*
// let numbers = [3, 7, 2, 7, 9, 2, 5, 7, 2];
// // let newNumbers = [...new Set(numbers)];
// let newNumbers = numbers.filter((Value, index ,arr) => {
//   return arr.indexOf(Value) === index;
// }) .sort();
// let sum = newNumbers.reduce((a, b) => {
//     return a + b;
// })
// console.log(newNumbers);
// console.log(sum);
*/
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = [...new Set(arr)];
// let sum2 = newNumbers.reduce((a , b) => {
//     return a + b
// }, 0)
// console.log(uniqueArr);
// console.log(sum2);

// let arr = [58, 59, 60, 75, 80, 97, 50];
// let filArr = arr.filter((item) => {
//     if (item == 58 || item == 59) {
//         return item
//     }
// })
// let newArr = arr.map((Value) => {
//   if (Value === 58) {
//     return Value + 2;
//   } else if (Value === 59) {
//     return Value + 1;
//   } else {
//     return Value;
//   }
// });
// console.log(arr);
// console.log(filArr);
// console.log(newArr);


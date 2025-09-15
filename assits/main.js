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
<<<<<<< HEAD
console.log(isVowle("amjad"));
*/
=======
console.log(isVowle("amjad"));*/
>>>>>>> 2a7f0ad450022258fdc34a6a1486b7ddb3d3ed15

/*---------------------------------------------------------------*/
/*-------------------Q-5-----------------------------------------*/
// function counter(str, num) {
//     let arr = ["a", "e", "i", "u", "o"];

// }
// console.log(counter("amjad", 2));

<<<<<<< HEAD
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

/*-------------------------------------------------------------*/
/*--------- 10 Question from the medium level -----------------*/

/*------------------------ Q-1 ----------------------------------*/
/*
function replaceSmiley(input) {
    let output = "";
    for (let i = 0; i < input.length; i++){
        if (input[i] == ")") {
            output += "(";
        } else {
            output += input[i];
        }
    }
    return output;
}

let input = ":) :) :) All smiles here :)";
console.log(replaceSmiley(input)); 
*/

/*------------------------ Q-2 ----------------------------------*/
/*
function hideCreditCard(cardNumber) {
    let char = "*";
    let hidenNum = "";
    let i = 0;
    while (i < cardNumber.length) {
        if (i <= cardNumber.length - 4) {
            hidenNum += char;
        } else {
            hidenNum += cardNumber[i];
        i++;
    }
}

  // for (let i = 0; i < cardNumber.length; i++)
  // {
  //     if (i <= 11) {
    //         hidenNum += char
    //     } else {
        //         hidenNum += cardNumber[i]
        //     }
        // }
        return hidenNum;
    }
    
let input = "1234561234565349";
console.log(hideCreditCard(input));
console.log(input.length);
*/

/*------------------------ Q-3 ----------------------------------*/
/*
function checkPronic(num) {
    let num1;
    let num2;
    if (num1 - num2 == 1 || num2 - num1 == 1) {
        console.log(`pronic`)
    } else {
        console.log(`not pronic`)
    }
    return num = num1 * num2
}
let num1 = 3;
let num2 = 4;
let num = 12;
checkPronic(num)
*/

/*------------------------ Q-4 ----------------------------------*/
/*
function maxWordsCanType(str, brokenLetter) {
    let res = 0;
    let max = 6;
    for (let i = 0; i < str.length; i++){
        if (str[i] == brokenLetter) {
            res++
            max--
            if (max == 0) {
                break
            }
        } else {
            continue
        }
    }
    return res
}

let x = "hello world my name amjad I am 22 years old and I studeying TIC amjad amjad studed"

console.log(maxWordsCanType(x, "d"));
*/

/*------------------------ Q-5 ----------------------------------*/

// الطريقة الاولى
/*
function findFirstAndLast(arr, num) {
    let find = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            find[find.length] = i;
            break
        }        
    }
        for (let i = arr.length; i > 0; i--) {
                if (arr[i] === num) {
                        find[find.length] = i
                        break
                    }
                }
return find
}
let arr = [1, 2, 3, 4, 3, 5, 6, 7, 3, 8, 9];
console.log(findFirstAndLast(arr, 3))
*/

// الطريقة التانية

/*
function findFirstAndLast(arr, num) {
    let firstIndex = 0;
    let lastIndex = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num) {
            if (firstIndex === 0) {
                firstIndex = i;
            } else {
                lastIndex = i;
            }
        }
    }
    return find = [firstIndex, lastIndex];
}

let arr = [1, 2, 3, 4, 3, 5, 6, 7, 3, 8, 9];
console.log(findFirstAndLast(arr, 3));
*/

/*------------------------ Q-6 ----------------------------------*/
/*
function longestConsecutiveZeros(str) {
    let res = 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            count++
            if (str[i + 1] != "0") {
                if (count > res) {
                    res = count
                    count = 0;
                }
            }
        }
    }
    return res 
}

let input = "101001000100001000001";
console.log(longestConsecutiveZeros(input));
// console.log(input.length)
*/

/*------------------------ Q-7 ----------------------------------*/
/*
function repeatVowels(str) {
  let arr = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  let newStr = "";
  let found = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (str[i] === arr[j]) {
            found = true;
            break;
        } else {
            found = false;
    }
}
if (found == true) {
    newStr += str[i] + str[i];
} else {
    newStr += str[i]
}
  }
  return newStr;
}

let input = "Hello Aaron, My name is amjad";
console.log(repeatVowels(input));
*/

/*------------------------ Q-8 ----------------------------------*/
/*
 الطريقة الاولى عن طريق تحويل الجملة لكلمات بداخل مصفوفة
 ثم مقارنة عناصر المصفوفة ببعض
 */
/*
function findShortestWord(str) {
  let arr = [];
    let word = "";
    let min = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      if (word.length > 0) {
        arr[arr.length] = word;
        word = "";
      }
    }
  }
  if (word.length > 0) {
    arr[arr.length] = word;
    }

    min = arr[0];
    for (let j = 0; j < arr.length; j++){
        if (arr[j].length < min) {
            min = arr[j];
        }
    }
    return min;
}
*/

/* ****************** */
/* ****************** */
/* ****************** */
/* الطريقة الثانية هيي مقارنة كلمات بدون مصفوفة*/
/*
function findShortestWord(str) {
    let word = "";
    let min = "";
    let first = true;
    for (let i = 0; i < str.length; i++){
        if (str[i] === " " || i === str.length) {
            if (word.length > 0) {
                if (first || word.length < min.length) {
                    min = word;
                    first = false;
                }
                word = "";
            }
            
        } else {
            word += str[i];
        }
    }
    return min
}

let str = "I love programming languege";
console.log(findShortestWord(str));
*/

/*------------------------ Q-9 ----------------------------------*/
/*
function convertToPascalCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
      if (str[i] === " " || i === str.length - 1) {
          if (i + 1 < str.length) {
              let code = str.charCodeAt(i + 1);
              if (code >= 97 && code <= 122) {
                newStr += "";
              code = code - 32;
                  newStr += String.fromCharCode(code);
                  i++
            }
        }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
let input = "hello world from java script";
console.log(convertToPascalCase(input));
*/

/*------------------------ Q-10 ----------------------------------*/
/*
function isSpOnGeCaSe(str) {
  for (let i = 0; i < str.length; i += 2) {
    // let i = 0;
    let code = str[i].charCodeAt(0);
    let code2 = str[i + 1].charCodeAt(0);
      if (code >= 65 && code <= 90 && code2 >= 97 && code2 <= 122) {
      return true;
    } else {
        return false
    }
  }
}
let str = "AmjaD";
console.log(isSpOnGeCaSe(str));
*/

/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/

/*------------------ 10/09/2025 ----------------------*/
/*----------- very Easy ----------*/
/*----------- Q-1 ----------*/
/*
function checkPassOrFail(marks) {
    if (marks >= 40) {
        return "Pass"
    } else {
        return "Fail"
    }
}

let input = 45;
console.log(checkPassOrFail(input));
*/

/*----------- Q-2 ----------*/
/*
function roundOff(num, ndigits) {
    return num.toFixed(ndigits);
    
}
let input = 0.77889254;
console.log(roundOff(input, 2))
*/

/*----------- Q-3 ----------*/
/*
function degreesToRadians(degrees) {
    const pi = Math.PI;
    return degrees * (pi / 180);
}
let input = 90;
console.log(degreesToRadians(input));
*/ /*
function degreesToRadians(degrees) {
  return degrees * (3.14 / 180);
}
let input = 90;
console.log(degreesToRadians(input));
*/

/*----------- Q-4 ----------*/
/*
function convertToTitleCase(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      res += str[i].toUpperCase();
    } else if (str[i] === " ") {
      res += str[i];
      res += str[i + 1].toUpperCase();
      i++;
    } else {
      res += str[i];
    }
  }
  return res;
}
let input = "hello world";
console.log(convertToTitleCase(input));
*/

/*----------- Q-5 ----------*/
>>>>>>> 2a7f0ad450022258fdc34a6a1486b7ddb3d3ed15

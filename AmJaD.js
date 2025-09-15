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

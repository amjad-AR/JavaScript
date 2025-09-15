function reverse(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
}
// console.log(reverse("hamza"))

///////////// -2- Remove duplicates from sorted array   ////////////

function remove(arr) {
  let arr1 = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let bool = false;
      if (arr[i] != arr[j]) {
        for (let x = 0; x <= arr1.length; x++) {
          if (arr[i] == arr1[x]) {
            bool = true;
            break;
          }
        }
        if (!bool) {
          arr1[arr1.length] = arr[i];
        }
      }
    }
  }
  return arr1;
}
let arr = [2, 3, 3, 4, 4, 5];
// console.log (remove(arr));

////////////////////   -3-  Three Sum     //////////////////
function threeSum(arr, target) {
  let x = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let y = j + 1; y < arr.length; y++) {
        if (arr[i] + arr[j] + arr[y] == target) {
          x = true;
        }
      }
    }
  }
  return x;
}
let arr1 = [1, 1, 3, 5, 8, 2];
// console.log(threeSum(arr1,7));

///////////////   -4-   Container with Most Water           ///////////////////

function containerwithMostWater(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let height = 0;
      if (arr[i] < arr[j]) {
        height = arr[i];
      } else {
        height = arr[j];
      }
      let width = j - i;
      let area = height * width;
      if (max < area) {
        max = area;
      }
    }
  }
  return max;
}
let arr8 = [1, 5, 4, 3];
console.log(containerwithMostWater(arr8));

//////////////////   -5- Longest Substring Without Repeating Characters     /////////////////

function longestSubstringWithout(arr) {
  let arr1 = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let bool = false;
      if (arr[i] != arr[j]) {
        for (let x = 0; x <= arr1.length; x++) {
          if (arr[i] == arr1[x]) {
            bool = true;
            break;
          }
        }
        if (!bool) {
          arr1[arr1.length] = arr[i];
        }
      }
    }
  }
  return arr1.length;
}
// console.log(longestSubstringWithout("tffrooraapp"));

/////////////    -6-   Trapping Rain Water Problem       //////////////////////
function trappingRainWaterProblem(arr) {
  let j = 0;
  let z = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let y = 0;
    if (arr[j] > arr[i]) {
      y = arr[j] - arr[i];
      z += y;
    } else if (arr[j] < arr[i]) {
      j = i;
    }
  }
  if (j > arr[arr.length - 1]) {
    z = z - arr[arr.length - 1];
  }
  return z;
}
let arr3 = [3, 0, 1, 0, 4, 0, 2];
// console.log(trappingRainWaterProblem(arr3));

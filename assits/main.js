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

function summing(num) {
    if (num % 2 == 1) {
        // let num1 = num;
        if (num > 0) {
            let i = 0;
            let num2 = 0;
            while (i < num) {
                num2 += num2 + 1;
                if (i == num) {
                    break
                }
            }
            return num2
        } else {
            return 0;

        }
    } else {
        console.log("this number is not Prime number")
    }
}
console.log(summing(5));
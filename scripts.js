let arr = [10, 14, 5, 18, 20, 15, 2, 9];

console.log("The array:", arr);
// MAXIMUM NUMBER
function maxNum (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Maximum Number:", maxNum(arr));

// SUM OF ALL ELEMENTS
function sumOfElements (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log("Sum of all elemets:", sumOfElements(arr));

// COUNT OF ODD NUMBERS
let countOddNums = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            count = count + 1;
        }
    }
    return count;
}
console.log("Count of Odd Numbers:", countOddNums(arr));
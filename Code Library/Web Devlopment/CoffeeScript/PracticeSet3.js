// Practice set 3

// create an array and take a user input and push it into array
let arr = [32, 87, 28, 29]
// let a = prompt("Enter a number: ")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// keep adding numbers to arr until user input 0
let b;
do {
    b = prompt("Enter a number: ")
    b = Number.parseInt(b)
    arr.push(b)
} while (b != 0);
console.log(arr)

// filter for number divisible by 10
let fil = arr.filter((item) => {
    return item % 10 == 0
})
console.log(fil)

// create an array of square of given numbers
let square = arr.map((num) => {
    return num * num
})
console.log(square)

// calculate factorial of n using reduce method and array having n natural numbers
let array = [1, 2, 3, 4, 5]
let fact = array.reduce((t1, t2) => {
    return t1 * t2
})
console.log(fact)
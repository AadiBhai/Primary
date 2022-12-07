// Practice Set 2

const obj = {
    Aaditya: 100,
    Harry: 99,
    Saurabh: 98
}

// Using for loop
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("Marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])
}

// This is using for in loop
for (i in obj) {
    console.log("Marks of " + i + " are " + obj[i])
}

// Print 'Try Again' until we enter a correct number
const CorNum = 5
let j
while (j != CorNum) {
    console.log("Try Again")
    j = prompt("Enter a correct number")
}
console.log("You have entered a correct number")

// Function to find the mean of 5 numbers
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5
}
/* A function can also be created as below
function mean (a, b, c, d, e) {
    return (a + b + c + d + e) / 5
} */
console.log("mean of given five numbers is " + mean(2, 5, 7, 9, 4))
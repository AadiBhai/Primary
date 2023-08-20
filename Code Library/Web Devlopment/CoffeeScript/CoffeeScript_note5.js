// Functions
// one way to define a function
function sum(a, b) {
    return a + b
}

console.log("The sum of two numbers is " + sum(3, 5)) // A way to call a function

// Another way to define a function (recommended)
const mean = (a, b, c) => {
    return (a + b + c) / 3
}

console.log("Mean of three numbers is " + mean(1, 2, 3))
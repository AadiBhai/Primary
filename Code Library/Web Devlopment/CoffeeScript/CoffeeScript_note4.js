// object and loops
// This is an object which is like dictionary of python
const obj = {
    Aaditya: 100,
    Harry: 99,
    Saurabh: 98
}

// for loop (just a regular for loop)
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// for in loop (make easy to access object and arrays)
for (i in obj) {
    console.log("Marks of " + i + " are " + obj[i])
}

// for of loop (access only iterable object)
for (j of "Aaditya") {
    console.log(j)
}

// while loop
let a = 0
while (a < 5) {
    console.log(a)
    a++
}

// do while loop
let b = 0
do {
    console.log(b)
    b++
} while (b < 5)
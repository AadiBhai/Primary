// Loops in Arrays

// for loop
const arr = [56, 43, 9, 27, 91]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// for...in
for (let a in arr) {
    console.log(arr[a])
}

// for...of
for (let b of arr) {
    console.log(b)
}

// forEach (method to create function to perform operation on array elements)
arr.forEach((element) => {
    console.log(element * element)
})

// Array.from (method to make array form an iterable or array like object)
let name = "Aaditya"
let array = Array.from(name)
console.log(array)

// following methods do not affect the original array
// map (creates a new array populated with the results of calling a provided function on every element in the calling array)
let jar = [2, 3, 5, 1, 9]
let newjar = jar.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(newjar)

//filter (creates a shallow copy of a portion of a given array, filtered elements from the given array that pass the test implemented by the provided function)
let mug = [7, 3, 78, 23, 10]
let newmug = mug.filter((values) => {
    return values <= 10
})
console.log(newmug)

// reduce (reduces the whole array to a single value according to the function)
let glass = [45, 38, 92, 73, 53]
let newglass = glass.reduce((e1, e2) => {
    return e1 + e2
})
console.log(newglass)
// Arrays
let arr = [1, 3, "Ram", null] // This is how we defined an array just as a variable but write the values inside a square bracket and the values can be of any type
console.log(typeof arr) // arrays are noting but objects

// Accessing the elements of array
console.log(arr) // This will print the whole array
console.log(arr[0]) // This will print the first element of array because indexing starts from 0
arr[4] = true // Adding value in an array
console.log(arr[5]) // This will print undefined as 4th element does not exit in our array
arr[4] = false // changing a value in an array
console.log(arr)
console.log(arr.length) // Print the length of array

// Accessing an array using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Array methods
// We have seen one above as .length
let a = arr.pop() // removes the last element form array
console.log(arr, a) // a will print the popped element
let b = arr.push(true) // adds new element in array
console.log(arr, b) // b will print new length of array after push
let c = arr.shift() // removes the first element of array
console.log(arr, c) // c will print the removed element
let d = arr.unshift(2) // adds new element at start of array
console.log(arr, d) // d will print the new length of array
let e = arr.join("__") // joins all elements with a string considering all elements as string
console.log(e)
let f = arr.toString() // convert array to string
console.log(f)
const arr1 = [87, 36, 24, 23, 45, 76]
let merge = arr1.concat(arr) // concatinate two array but do not change the original ones also the concatinated one become new array
console.log(merge)
let srt = arr1.sort() // sort the element considering them as a string
console.log(srt)
// to sort in ascending or descending order we can use a function inside sort method as
const fun = (a, b) => {
    return b - a
}
let des = arr1.sort(fun) // sort in descending order
console.log(des) // we can do similar for asc by a - b
let scha = arr1.splice(2, 2, 105, 115) // (index, no.of.element,item1,...,itemX)
console.log(arr1)
// we know the slice method it is same as for string
// now 'delete' this is not a method its an operator
delete arr1[0] // deletes the element and size of array remains same
console.log(arr1)
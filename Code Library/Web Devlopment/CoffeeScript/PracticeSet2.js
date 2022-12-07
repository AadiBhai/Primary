// Practice set 2

console.log("har\"".length)

// Exploring includes, startwith and endswith
const a = "This is a sample statement for include method"
console.log(a.includes("sample")) // Check if the given string contain the specified characters
// This can also be done as below by using templet literals
const This = 'for'
console.log(`The word "${This}" ${a.includes(This) ? 'is' : 'is not'} in the sentence a`); // startsWith and endsWith can also implement this method

console.log(a.startsWith("This")) // Check if the given string starts with specified characters

console.log(a.endsWith("od")) //Check if the given string ends with specified characters

// convert a string to lower case
const b = "SAMPLE TEXT"
console.log(b.toLowerCase())

// extract the amount from given string
// given string is 'Please give Rs 1000'
const str = "Please give Rs 1000"
const amount = Number.parseInt(str.slice("Please give Rs ".length))
console.log(amount)

// change the 4th character of a string
// we cannot do that because string is immutable
// str2[3] = "o" // we cannot do this because string is immutable
// but we can manupulate some thing while printing as below
const str2 = "sample"
const buff = str2.slice(3, 4)
console.log(str2.replace(buff, 'o'))
// String, it's methods and escape sequence characters
// String can be written inside double quote or single quote
let a = "Aaditya" // We cannot change characters of a string once it is defined
let b = 'Saurabh' // Indexing of string starts from 0
let c ="Str\"ing" // Here \" is an escape sequence character
console.log(c)

//we can also concatinate multiple strings
let con = "Aaditya" + "Saurabh"
console.log(con)

// There are so many methods in js which we can google according to our convinience some of which are shown below
console.log(a.length) // print the length of the string
console.log(a.toUpperCase(a)) // print all string character to upper case
console.log(a.toLowerCase(a)) // print all string character to lower case
console.log(a.slice(2, 5)) // print from 2nd index to fifth
console.log(a.slice(4)) // print from 5th char
let con2 = a.concat(" and ", b) // another method of concatination
console.log(con2)

// templet literal
let temp = `a and b are friends` // templet literal is written in backtick
temp = `${a} and ${b} are friends`
console.log(temp)
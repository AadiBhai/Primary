console.log("This is external script written in seprate file which is access using src attribute of script tag.")

// Console methods
console.clear() // clear the console
console.log(console) // list out all the functions of console objects
console.warn("This is your first warning") // Print the warning on the console in red color
console.error("This is an error") // print an error in red on the console so that we get to know which is an error
console.assert(5 == 5) // it will pass if the statement is assertive otherwise throws error in red

obj = {
    aj : "Jerry", dks : "Berry", s : "Harry"
}
console.table(obj) // present the content of object in tabular form

console.time("ForLoop")
for (let i = 0; i < 5; i++) {
    console.log(i)
}
console.timeEnd("ForLoop")

console.time("WhileLoop")
let j = 0
while (j < 6) {
    console.log(j)
    j++
}
console.timeEnd("WhileLoop")
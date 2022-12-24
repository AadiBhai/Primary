document.write("Hello")

// we write the executable statement inside a function otherwise it will not work
let a = setTimeout(function () {
    alert("This is late because of setTimeout")
}, 5000)

console.log(a)
clearTimeout(a) // this will clear all of the setTimeout 
console.log(a)

// we can also pass arguments to function inside setTimeout
const sum = (a, b) => {
    console.log("display sum after 3 sec " + (a + b))
    a + b
}

setTimeout(sum, 3000, 1, 2) // this is how we pass arguments

// if we want to execute something repetedly after specific interval of time then we use setInterval
let b = setInterval(function (){
    alert("This will irritate you")
}, 2000)

clearInterval(b) // this will clear all setInterval

// setInterval using function with arguments
// DOM nevigation properties are useful when the elements are close to each other

const changebgred = () => {
    document.body.firstElementChild.firstElementChild.style.background = "red"
}
changebgred()

let b = document.body
console.log("First child of b is: ", b.firstChild) // firschild returns first child that could be any node or element
console.log("First element child of b is: ", b.firstElementChild) // firstElementChild returns only element child using element will only access the elements and skip all the nodes
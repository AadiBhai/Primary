// DOM nevigation properties are useful when the elements are close to each other

const changebgred = () => {
    document.body.firstElementChild.firstElementChild.style.background = "red"
}
changebgred()

let b = document.body
console.log("First child of b is: ", b.firstChild) // firschild returns first child that could be any node or element
console.log("First element child of b is: ", b.firstElementChild) // firstElementChild returns only element child using element will only access the elements and skip all the nodes

// If the elements are not close to eah other we have some more methods to search the DOM like below
/* document.getElementById("id") // This method is used to get the element with a given "id" attrribute
   document.getElementByClassName("class") // This is same as id used for class
   document.querySelectorAll(".className") // Returs all elements inside an element mathing the given css selector
   document.querySelector // returns the first element for the given css selector. A efficient version of element.querySelectorAll(css)[0]
   // We also have getElementsByTagName, getElementByName*/
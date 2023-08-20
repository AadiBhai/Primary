// Attribute Methods
let first = document.getElementById("first")
let a = first.getAttribute("class") // used to get the value of an attribute
console.log(a)
console.log(first.hasAttribute("class")) // used to check the existance of attribute
console.log(first.hasAttribute("hidden")) // used to check the existance of attribute
console.log(first.setAttribute("hidden", "true")) // used to set a new attribute
console.log(first.setAttribute("class", "true just")) // if set the existing attribute it removes the existing value and add the new value
console.log(first.removeAttribute("hidden")) // used to remove attribute
console.log(first.attributes) // used to list out all the attribute
console.log(first.dataset) // used to list out all custom attributes created usin 'data-'
console.log(first.dataset.game)
console.log(first.dataset.player)
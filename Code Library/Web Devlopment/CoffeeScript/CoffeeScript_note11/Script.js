// Walking DOM
// console.log(document.body) // document.body returns body tag
// console.log(document.documentElement) // Returns html tag which is an object
// console.log(document.head) // returns head elements
// console.log(document.title) // returns title as string

// Accessing childrens
console.log(document.body.firstChild) // return first child of body
console.log(document.body.lastChild) // return last child of body
console.log(document.body.childNodes) // return list of all nodes of body
console.log(document.body.childNodes[0] === document.body.firstChild)
console.log(document.body.childNodes[document.body.childNodes.length - 1] === document.body.lastChild)

// DOM collection
a = document.body.firstChild
// all the following methods consider nodes not elements
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild)
console.log(a.firstChild.nextSibling)
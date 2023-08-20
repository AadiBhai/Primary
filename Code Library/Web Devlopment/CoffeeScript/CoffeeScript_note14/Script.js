// innerHTML and outerHTML
// Note: every line of code is for seprate execution don't try to execute all of it at once

console.log(document.getElementsByTagName("span")[0]) // log shows the element DOM tree and
console.dir(document.getElementsByTagName("span")[0]) // dir shows the element as an object

// TagName reads tag name of an element and NodeName defines for any node

// innerHTML and outerHTML are only valid for element nodes
first.innerHTML // innerHTML property allows to get the html inside the document as a string
// we can read the html like this and assign as follow
first.innerHTML = "Hey I am span"
first.outerHTML // outerHTML works like innerHTML but it access the tags along with its content
first.outerHTML = "<div>hello I am div</div>"

// To access comments and text nodes we use data or nodeValue
console.log(document.body.firstChild)
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.textContent) // return all the text content from the document body

// toggle hidden property
first.hidden = false
// HTML Insertion Methods in DOM
let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h3>This is not the way to greet<h3>'

let div = document.createElement('div')
div.innerHTML = '<h3>Hello World!</h3>'
// below methods are accessing the same element so the last method will be considered
a.append(div) // insert element at the end as the last child
a.prepend(div) // insert element at the begining as the first child
a.before(div) // insert element before node (in this case before a)
a.after(div) // insert element after node
a.replaceWith(div) // replace the node with specified one

// Insert Adjacent HTML/Text/Element
first.insertAdjacentHTML('beforebegin', '<div="test">beforebegin</div>'); // insert before the begining of element/node(outside the element/node)
first.insertAdjacentHTML('beforeend', '<div="test">beforeend</div>'); // insert before the end of element(last child of the node/element)
first.insertAdjacentHTML('afterbegin', '<div="test">afterbegin</div>'); // insert after the begining of element(first child of the node/element)
first.insertAdjacentHTML('afterend', '<div="test">afterend</div>'); // insert after the end of element/node(outside the node/element)
first.remove()
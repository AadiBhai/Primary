// If the elements are not close to eah other we have some more methods to search the DOM like below
/* document.getElementById("id") // This method is used to get the element with a given "id" attrribute
   document.getElementByClassName("class") // This is same as id used for class
   document.querySelectorAll(".className") // Returs all elements inside an element mathing the given css selector
   document.querySelector // returns the only element for the given css selector. A efficient version of element.querySelectorAll(css)[0]
   // We also have getElementsByTagName, getElementByName*/

   let Logo = document.getElementById("logo")
   Logo.style.color = "blue"
   let btn = document.getElementsByClassName("btn-primary")[0] // [0] points the first element of classs card-title
   btn.style.color = "green"
   let title = document.querySelectorAll(".card-title")
   title[0].style.color = "red"
   title[1].style.color = "blue"
   title[2].style.color = "green"
   document.querySelector(".second").style.color = "red"

   // match, closest and contain
   let id1 = document.getElementById("id1")
   let sp1 = document.getElementById("sp1")
   console.log(id1)
   console.log(id1.matches(".class"))
   console.log(id1.matches(".box")) // match the css selector with secified one and return true or false
   console.log(sp1.closest("#sp1")) // check the closest css selector and return it
   console.log(id1.contains(sp1)) // returns true if id1 contains sp1 or we call it by itself as below
   console.log(sp1.contains(sp1))
   console.log(sp1.contains(id1)) // in this case return false
window.console.log(window) // window is a global object which has so many functionality or methods, it contins DOM, BOM and javascript core features

// DOM(Document object module) represent the whole html document as a javascript object as 'document'
console.log(document.body) // This will print the body of html
// We can also access every tag and html or css related thin using this like below
document.body.style.background = "Yellow" // This will change the background color of doc to yellow

// BOM(Browser object module) represent additional object provided by browser(host environment)
// prompt, alert and confirm
alert("Please enter your amount")
let a = prompt("Enter the value here", 1000) // 1000 is a default value here
a = Number.parseInt(a)
let b = confirm("Do you want receipt")

if (b) {
    document.write(a, "Transaction Successful") // Write to html as an inline element
}
else {
    document.write("Transaction Successful")
}

location.href = "https://google.com" // This will take us to google.com
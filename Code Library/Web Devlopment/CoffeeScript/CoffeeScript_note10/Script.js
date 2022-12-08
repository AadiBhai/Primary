// prompt, alert and confirm
alert("Please enter your amount")
let a = prompt("Enter the value here", 1000) // 1000 is a default value here
a = Number.parseInt(a)
let b = confirm("Do you want receipt")

if (b) {
    document.write(a, "Transaction Successful")
}
else {
    document.write("Transaction Successful")
}
// Driving eligibility based on age with confirmation and error
let b
do {
    let age = prompt("Enter your age here")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("Enter a valid age");
        break;
    }
    const eligibility = (age) => {
        return age >= 18 ? true : false
    }
    if (eligibility(age)) {
        alert("You are eligible to Drive")
    }
    else {
        alert("Wait until you become 18")
    }
    b = confirm("Do you want to see the prompt again")
} while (b == true)

// Redirect to google.com if user enter a number greater than 4
// let number = prompt("Enter a number")
// number = Number.parseInt(number)
// if (number > 4) {
//     location.href = "https://google.com"
// }

// Change the background color according to user input
// let color = prompt("Enter the background color")
// document.body.style.background = color
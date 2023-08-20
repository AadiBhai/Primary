// snake, water and gun game

const swg = ["S", "W", "G"]
let swgRandom = swg[Math.floor(Math.random() * 3)]
let pick = prompt("Enter your choice: ")

if (swgRandom === pick){
    document.write(`Computer: ${swgRandom} <br> Player: ${pick} <br> It's A Tie`)
}
else if (swgRandom === "S" && pick === "W"){
    document.write(`Computer: ${swgRandom} <br> Player: ${pick} <br> You Lose`)
}
else if (swgRandom === "S" && pick === "G"){
    document.write(`Computer: ${swgRandom} <br> Player: ${pick} <br> You Win`)
}
else if (swgRandom === "G" && pick === "W"){
    document.write(`Computer: ${swgRandom} <br> Player: ${pick} <br> You Win`)
}
else if (swgRandom === "W" && pick === "S"){
    document.write(`Computer: ${swgRandom} <br> Player: ${pick} <br> You Win`)
}
else if (swgRandom === "G" && pick === "S"){
    document.write(`Computer: ${swgRandom} <br> Player: ${pick} <br> You Lose`)
}
else if (swgRandom === "W" && pick === "G"){
    document.write(`Computer: ${swgRandom} <br> Player: ${pick} <br> You Lose`)
}
else {
    alert("Please enter a valid input!")
}

// Here I got to know that return statement ends function execution and specifies a value to be returned to the function caller
// Note: It is only for function we cannot use it elsewhere
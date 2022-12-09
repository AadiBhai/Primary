// snake, water and gun game

const swg = ["S", "W", "G"]
let swgRandom = swg[Math.floor(Math.random() * 3 + 1)]

let pick = prompt("Enter your choice")

if (swg == "S") {
    if (pick == "S") {
        alert("It's a Tie")
    }
}
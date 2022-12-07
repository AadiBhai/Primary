// Exercise 1
// Generate a random number and take user input to guess it display the score and actual number after the correct guess and terminate the program

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  let a;
  let chances = 0;
  let number = getRandomIntInclusive(1, 100);
  do {
      a = prompt("Guess the number: ")
      a = Number.parseInt(a)
      chances++
  } while (a != number && chances != 100)
  if (chances == 100) {
      console.log("Game Over")
  }
  else {
      console.log("Correct Guess:", number)
      console.log("Chances taken:", chances)
  }
// Write a dart program to check if a character is a vowel or consonant.
// Input: var = "A";  Output: A is a vowel.
// Input: var = "D";  Output: D is a consonant.

void main(){
  String alpha = "D";

  if ((alpha == "A") || (alpha == "E") || (alpha == "I") || (alpha == "O") || (alpha == "U") || (alpha == "a") || (alpha == "e") || (alpha == "i") || (alpha == "o") || (alpha == "u")) {
    print("${alpha} is a vowel.");
  }else{
    print("${alpha} is a consonant");
  }
}

// this can also be done using else-if ladder
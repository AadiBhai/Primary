// Write a dart program, take a number and print whether it is less than 10 or greater than 10.
// Input: var = 5;  Output: 5 is Less than 10.
// Input: var = 16;  Output: 16 is greater than 10.

void main(){
  int number = 16;
  if (number < 10) {
    print("${number} is Less than 10");
  }else if(number > 10){
    print("${number} is greater than 10");
  }else {
    print("${number} is equal to 10");
  }
}
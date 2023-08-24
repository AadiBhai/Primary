// Write a dart program, take a number and print whether it is positive or negative.

void main(){
  num number = 0;
  if (number > 0) {
    print("${number} is a positive");
  }else if(number < 0){
    print("${number} is a negative");
  }else{
    print("${number} is neither negative nor positive");
  }
}
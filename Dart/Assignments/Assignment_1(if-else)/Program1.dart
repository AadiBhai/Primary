// Write a dart program to check if a number is even or odd
// Input: var = 10;  Output: 10 is an even no
// Input: var = 37;  Output: 37 is an odd no

void main(){
  int num = 37;
  if(num%2 == 0) {
    print("${num} is an even no");
  }else{
    print("${num} is an odd no");
  }
}
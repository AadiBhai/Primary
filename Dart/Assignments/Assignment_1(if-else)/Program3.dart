// Write a dart program to determine if the use can cast a vote or not(a person with age above 18 can cast a vote)
// Input: age = 18;  Output: You can cast a vote
// Input: age = 14;  Output: You can't cast a vote

void main(){
  int age = 14;
  if(age >= 18){
    print("You can cast a vote");
  }else{
    print("You can't cast a vote");
  }
}
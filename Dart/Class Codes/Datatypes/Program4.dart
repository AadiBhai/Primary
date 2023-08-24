main(){
  int x = 10;
  print(x);
  num y = 20;
  print(y);

  y = 20.5; // assignment will be success cause y is a num means it accepts int and double both
  print(y);

  x = 35.5; // error cause x is of int type
  print(x);
}
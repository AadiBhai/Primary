// dynamic
// same as var but value can be change during runtime in simple words we can assign any value of any datatype at any time

void main(){
  dynamic x = 10;
  dynamic y = 20;

  print(x.runtimeType);
  print(y.runtimeType);

  x = 20.5;
  y = 30.5;

  print(x.runtimeType);
  print(y.runtimeType);
}
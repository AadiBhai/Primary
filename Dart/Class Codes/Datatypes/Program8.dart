// var
// this datatype can act as any other datatype i.e every type of value can be assign to it and it will continue to behave like a datatype of the value assign to it

void main(){
  var x = "Hello";
  print(x);
  print(x.runtimeType);

  var y = 20.5;
  print(y);

  // x = 20; // error
}
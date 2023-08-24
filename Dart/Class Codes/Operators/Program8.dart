// Bitwise Operator
// this operator does the binary operation on the binary value of the original value and returns ans in the form of original value
// AND         --> &
// OR          --> |
// XOR         --> ^
// left shift  --> <<
// right shift --> >>
// negation    --> ~

void main(){
  int x = 2;
  int y = 72;
  print(x & y);
  print(x | y);
  print(x ^ y);
  print(x << 3); // shifts binary digits towards left
  print(y >> 4); // similar to left shift
  print(~x);
}
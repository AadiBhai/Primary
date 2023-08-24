// Unary operators
// preincrement  --> ++x
// postincrement --> x++
// predecrement  --> --x
// postdecrement --> x--
// pre internally calls pre() method and post calls post()

void main(){
  int x = 10;

  print(++x);
  print(x++);
  print(x);
}
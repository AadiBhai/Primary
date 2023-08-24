void main(){
  for(int i = 1; i <= 50; i++){
    if(i%4 == 0 && i%5 == 0){
      continue;
    }
    print(i);
  }
}
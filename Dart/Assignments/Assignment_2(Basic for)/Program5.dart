// Write a program to print odd numbers 1-50

void main() {
  for (int i = 1; i <= 50; i++) {
    if (i%2 == 0) {
      continue;
    }
    print(i);
  }
}
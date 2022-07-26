// Pointers

#include <iostream>
using namespace std;

int main()
{
    int a = 5;
    int *b = &a;
    // & ----> (address of ) Operator
    cout << " Address of a is " << &a << endl;
    cout << " Address of a is " << b << endl;
    // * ----> (value at) Dereference operator
    cout << "The value at address b is " << *b << endl;
    // pointer to pointer
    int **c = &b;
    cout << "The address of b is " << &b << endl;
    cout << "The address of b is " << c << endl;
    cout << "The address of address b is " << *c << endl;
    cout << "The value at address c is " << **c << endl;
    return 0;
}
#include<iostream>
using namespace std;

int main()
{
    int  i = 1;

    do
    {
        cin>>i;
    }
    while (i>100);
    cout<<"The number you just entered is less than 100";

    return 0;
}
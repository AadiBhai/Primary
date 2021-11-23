#include<iostream>
using namespace std;

int main()
{
    int i = 1, sum;
    sum = 0;

    while (i <= 100)
    {
        sum = sum + i;
        i = i + 1;
        cout<<"sum of first hundred natural number = "<<sum<<endl;
    }
    
    return 0;
}
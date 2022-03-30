//example of nested-if statement

#include<iostream>
using namespace std;

int main()
{
    float a, b, c;
    cout<<"a=";
    cin>>a;
    cout<<"b=";
    cin>>b;
    cout<<"c=";
    cin>>c;

    if (a>b)
    {
        if (a>c)
        cout<<"a is largest";
        else
        cout<<"c is largest";   
    }
    else
    {
        if (b>c)
        cout<<"b is largest";
        else
        cout<<"c is largest";
    }
    return 0;
}

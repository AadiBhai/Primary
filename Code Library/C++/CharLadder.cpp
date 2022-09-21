#include <iostream>
using namespace std;

int main()
{
    int a;
    string b;

    cout << "Enter the no. of rows required : ";
    cin >> a;
    cout << "Enter any character/string : ";
    cin >> b;

    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            cout << b << " ";
        }
        cout << endl;
    }

    return 0;
}
//example of else-if statement

#include<iostream>
using namespace std;

int main()
{
    float CGPA, grade, distinction, first, high_second, second;
    
    cout<<"CGPA =";
    cin>>CGPA;

    if (CGPA>=7.75)
        cout<<"class = distinction"<<endl;
    else if((7.74>=CGPA) && (CGPA>=6.75))
        cout<<"class = first"<<endl;
    else if((6.74>=CGPA) && (CGPA>=5.3))
        cout<<"class = high_second"<<endl;
    else if(CGPA<5.3)
        cout<<"class = second"<<endl;
    return 0;
}
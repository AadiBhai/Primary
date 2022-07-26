//Function overloading - means use same thing for different works

#include<iostream>
using namespace std;

float volume(float r, float h){
    return (3.14*r*r*h);
}

float volume(float a, float b, float c){
    return (a*b*c);
}

//here we are using same name for the different functions this is called function overloading

int main()
{
    cout<<"The volume of cylinder is "<<volume(2, 3)<<endl;
    cout<<"The volume of cuboid is "<<volume(2, 3, 5)<<endl;
    return 0;
}